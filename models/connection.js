/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('connection', {
    UniqueID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ConnectionName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    ConnectionEmail: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConnectionPhone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConnectionRelationship: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConnectionStatus: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConnectedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Connectionviewbydate: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SavedProfiles: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'connection'
  });
};
