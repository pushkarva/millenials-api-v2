/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('genericlookup', {
    LookupName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    LookUpValues: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LookupType: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    LookupDesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'genericlookup'
  });
};
