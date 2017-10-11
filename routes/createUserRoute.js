var Router = require('restify-router').Router;
var userController = require("../controllers/userController");

module.exports.route = function(server) {
    let router = new Router();

   
    router.post('', (req, res, next) => {
        if (req.body.dob &&
            req.body.username &&
            req.body.password &&
            req.body.firstName &&
            req.body.lastName &&
            req.body.gender
          ) {
         userController.createUser(req).then(function (resp) {
             if(resp.statuscd==="SUCCESS"){
                return res.send(200, resp.user);
             }else{
                return res.send(404, {"Status":resp.statuscd+"-"+resp.status}); 
             }
            }) 
        }else{
            return res.send(404, {"Status":"INSUFFICIENT_REQUEST-dob,username,password,firstname,lastnameand gender are required fields"});
        }
        });
        

    router.applyRoutes(server, 'api/user');
};
