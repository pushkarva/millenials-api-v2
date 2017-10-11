/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_sessions', {
    iduser_sessions: {
      type: DataTypes.INTEGER(55),
      allowNull: false,
      primaryKey: true
    },
    idUser: {
      type: DataTypes.STRING(70),
      allowNull: true,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
    sessionToken: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deviceId: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deviceType: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    browserClient: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
    }, {
    tableName: 'user_sessions'
  });
};
