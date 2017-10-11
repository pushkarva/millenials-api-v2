/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('travel_destinations', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    DESTINATION: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USERID: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    tableName: 'travel_destinations'
  });
};
