/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    ConnectionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Relationship: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConnectedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'comment'
  });
};
