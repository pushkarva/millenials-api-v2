/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_sessions', {
    iduser_sessions: {
      type: DataTypes.INTEGER(55),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    idUser: {
      type: DataTypes.STRING(70),
      allowNull: false,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
    sessionToken: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    device: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    browser: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_ip: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'user_sessions'
  });
};
