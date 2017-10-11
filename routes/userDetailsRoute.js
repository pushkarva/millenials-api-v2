var Router = require('restify-router').Router;
var userController = require("../controllers/userController");
var passport = require('passport'); // Authentication and authorization

module.exports.route = function(server) {
    let router = new Router();

    router.use(function (req, res, next) {
        passport.authenticate('local-dbcheck',
        function (err, user, info) {
        if (!user) {
            return res.send(401, { error: { code: 401, status: 'ACCESSDENIED', message: 'Access denied' } });
          } else {
            req.user = user;
            return next();
          }  
        })(req, res, next);
        
     });

   
    router.get('/:id', (req, res, next) => {
         userController.getByUsername(req.params.id).then(function (user) {
            return res.send(200, user);  
         }),function(err){
            return res.send(404, "No user found with id " + req.params.id);  
         }    
        });

    router.applyRoutes(server, 'api/user');
};
