/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suggestion_corner', {
    UniqueUserid: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    id: {
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
    Connectionsbydate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SavedProfiles: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'suggestion_corner'
  });
};
