    var User = require('../models/user');
    var Sequelize = require("sequelize");
    var connection = require("../helper/dbconnection");
    var eH = require("../helper/passHashHelper");

    class UserController {

      getAll() {
        return new Promise(function (resolve, reject) {
        User(connection,Sequelize).findAll().then(users => {
          return resolve(users);
        }).catch(err => {
          console.error('Database Error:', err);
          return reject(err);;
        });
      
      });
    };

      getByUsername(username) {
        return new Promise(function (resolve, reject) {
          User(connection, Sequelize).find({
            where: {
              $or: [{
                  iduser: {
                    $eq: username
                  }
                },
                {
                  Email: {
                    $eq: username
                  }
                },
                {
                  Mobile: {
                    $eq: username
                  }
                }
              ]
            }
          }).then(user => {
            return resolve(user);
          }).catch(err => {
            console.error('Database Error:', err);
            return reject(err);;
          });

        });
      };

      createUser(req) {
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