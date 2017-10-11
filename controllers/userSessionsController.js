    var UserSession = require('../models/user_sessions');
    var Sequelize = require("sequelize");
    var connection = require("../helper/dbconnection");
    var eH = require("../helper/passHashHelper");

    class UserController {

      getByUsername(username) {
        return new Promise(function (resolve, reject) {
          User(connection, Sequelize).find({
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

      createUser(req,token) {
        return new Promise(function (resolve, reject) {
          var randomSalt = eH.getSalt();
          var userData = {
            iduser: req.body.username,
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            PasswordHash: eH.passHash(req.body.password,randomSalt),
            DOB: req.body.dob,
            Sex: req.body.gender,
            RandomSalt: randomSalt,
          }
          var model = User(connection, Sequelize);
          model.find({
            where: {
              iduser: req.body.username
            }
          }).then(user => {
            if (!user) {
              model.create(userData)
                .then(user => {
                  console.log('created');
                  return resolve({
                    "user": user,
                    "statuscd": "SUCCESS",
                    "status": "New User created"
                  });
                  //    res.send(200, { success: { code: 200, status: 'OK', message: 'Success - User created successfully' } });
                })
                .catch(err => {
                  console.error('Database Error:', err);
                  return resolve({
                    "statuscd": "DATABASE_ERR",
                    "status": err
                  });
                  //    res.send(404, { error: { code: 404, status: 'ENOTFOUND', message: 'The username is invalid.  Please try again.' } });
                });
            } else {
              console.error('User already exists.');
              return resolve({
                "user": user,
                "statuscd": "INVALIDUSER",
                "status": "User already exists"
              });
              //  res.send(444, { error: { code: 444, status: 'INVALIDUSER', message: 'The username is invalid.  Please try again.' } });
            }
          });
        });
      };
    }
    module.exports = new UserController();