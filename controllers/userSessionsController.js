    var UserSession = require('../models/user_sessions');
    var Sequelize = require("sequelize");
    var connection = require("../helper/dbconnection");
    var useragent = require('useragent');
    
    class UserSessionsController {

      getSessionsTokenByUsername(username) {
        return new Promise(function (resolve, reject) {
          UserSession(connection, Sequelize).find({
            where: {
              iduser: {
                $eq: username
              }
            }
          }).then(sessions => {
            return resolve(sessions);
          }).catch(err => {
            console.error('Database Error:', err);
            return reject(err);;
          });

        });
      };

      getSessionTokenByUsernameToken(username,token) {
        return new Promise(function (resolve, reject) {
          UserSession(connection, Sequelize).find({
            where: {
              $and: [{
              idUser: {
                $eq: username
              },
              sessionToken: {
                $eq: token
              }
            }
          ]
        }
          }).then(session => {
            return resolve(session);
          }).catch(err => {
            console.error('Database Error:', err);
            return reject(err);
          });

        });
      };
      
      createUserSession(req,token) {
        return new Promise(function (resolve, reject) {
      
          var ip = '127.0.0.1';
          
          var ip2 = req.headers['x-forwarded-for'] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.connection.socket.remoteAddress;
          console.log(ip2);
          

          var agent = useragent.parse(req.headers['user-agent']);
           var userSessionData = {
            idUser: req.body.username,
            browser: agent.toAgent(),
            device: agent.device.toString()+','+agent.os.toString(),
            sessionToken: token,
            user_ip: ip
          }
          var model = UserSession(connection, Sequelize);                     
              model.create(userSessionData)
                .then(userSession => {
                  console.log('created');
                  return resolve({
                    "session": userSession,
                    "statuscd": "SUCCESS",
                    "status": "New Session created"
                  });                  
                })
                .catch(err => {
                  console.error('Database Error:', err);
                  return resolve({
                    "statuscd": "DATABASE_ERR",
                    "status": err
                  });                 
                }); 
             });
      };
    }
    module.exports = new UserSessionsController();