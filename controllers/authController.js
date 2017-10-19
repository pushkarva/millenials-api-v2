// The Essentials
var passport = require('passport'); // Authentication and authorization
var LocalStrategy = require('passport-local').Strategy; // Local passport strategy
var JwtStrategy = require('passport-jwt').Strategy; // JWT passport strategy
var ExtractJwt = require('passport-jwt').ExtractJwt; // Various JWT extraction methods
var jwt = require('jsonwebtoken'); // Jason Web Tokens
var config = require('config'); // Easy configuration file parser
var userController = require("./userController");
var userSessionController = require("../controllers/userSessionsController");
var bcrypt = require('bcrypt');

// Configuration
var jwtConfig = config.get('jwt');
//-----------------------------------------------------------------------------
// MAIN CODE BLOCK
//-----------------------------------------------------------------------------

var Auth = function () { };
var auth = new Auth();

/** Serialize the user information in to an object */
passport.serializeUser(function (user, done) {
  done(null, user.iduser);
});

/** De-serialize the user from an object */
passport.deserializeUser(function (iduser, done) {
  userController.getByUsername(iduser).then(function (user) {
  done(null, user);
  })
});

/** Configure the local passport strategy
 */

passport.use('login-strategy',
  new LocalStrategy({passReqToCallback: true},
    function (req,username, password, done) {
      // Test the access credentials
      var user = userController.getByUsername(username).then(function (user) {
       if (user && (bcrypt.compare(password, user.PasswordHash))) {          
          var payload = { username: username, id: user.iduser, email: user.Email, mobile: user.Mobile };
          jwt.sign(payload, jwtConfig.secretKey, {
            algorithm: jwtConfig.algorithm, expiresIn: parseInt(jwtConfig.tokenValidity),
            issuer: jwtConfig.issuer, audience: jwtConfig.audience,
            subject: username
          }, function (err, token) {
            if (err) {
              return (done(true, null));
            } else {
              userSessionController.createUserSession(req,token);
              return done(null, {
                id: user.iduser,
                username: username,
                firstName: user.FirstName,
                lastName: user.LastName,
                token: token
              });
            }
          });
  
        } else {
          return done(null, false, { message: 'Incorrect username or password.' });
        }
      })
  
    })
);


/** Configure the JWT passport strategy
  *
  * To demonstrate passport's flexibility this function works with the
  * verification of JSON web tokens.  To be somewhat compatible with
  * oAUTH and Bearer tokens we will have this function extract the 
  * JWT from the authorization header */
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = jwtConfig.secretKey;
opts.issuer = jwtConfig.issuer;
opts.audience = jwtConfig.audience;
opts.passReqToCallback = true;


passport.use('local-dbcheck',new JwtStrategy(opts, function (req, jwt_payload, done) { 
  // Test for successful verification
  if (jwt_payload.hasOwnProperty('username')) {      
    userSessionController.getSessionTokenByUsernameToken(jwt_payload.id,req.headers.authorization.slice(4))
    .then (function (session) {
     if(session.sessionToken===req.headers.authorization.slice(4)){
        return done(null, jwt_payload);
      }
    });
   
  } else {
    return done(null, false);
  }  
 
}));

/** Export our route map */
module.exports = auth;


/*var updateOrCreate = function (model, where, newItem) {
  // First try to find the record
  model.find({ where: where }).then(foundItem => {
    //console.log(foundItem);
    if (!foundItem) {
      // Item not found, create a new one

      model.create(newItem)
        .then(item => {
        })
        .catch(err => {
          console.error('Database Error:', err);
        });
    }
    else {
        // Found an item, update it
        model.update(newItem, {where: where})
            .then(onUpdate)
            .catch(onError);
        ;
    } 
  }).catch(err => {
    console.error('Database Error:', err);
  });
};
*/