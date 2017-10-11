var Router = require('restify-router').Router;
var userController = require("../controllers/userController");
var auth = require("../controllers/authController");
var passport = require('passport'); // Authentication and authorization


module.exports.route = function(server) {
    let router = new Router();

    router.use(function (req, res, next) {
        passport.authenticate('login-strategy',
        function (err, user, info) {
        if (!user.hasOwnProperty('token')) {
            return res.send(401, { error: { code: 401, status: 'ACCESSDENIED', message: 'Access denied' } });
          } else {
            req.user = user;
            return next();
          }
  
        })(req, res, next);
        
     });


    router.post('', (req, res, next) => {
        
         if(req.user) {
            return res.send(200, req.user);  
         }else{
            return res.send(404, "No user found with id " + req.params.id);  
         }    
        });

    router.applyRoutes(server, '/auth/login');
};
