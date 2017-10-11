/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moment', {
    MOMENTS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MomentsTarget: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MomentCreateDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MomentLocation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MomentContent: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TextMessageDetails: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PeopleTags: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PlaceTags: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Likes: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ViewDetails: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USERID: {
      type: DataTypes.STRING(70),
      allowNull: false,
      references: {
        model: 'user',
        key: 'iduser'
      }
    }
  }, {
    tableName: 'moment'
  });
};
