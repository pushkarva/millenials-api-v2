/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat', {
    ThreadID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UsersInvolved: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContentType: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textMessageDetails: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dateWatched: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeleteSentMessage: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'chat'
  });
};
