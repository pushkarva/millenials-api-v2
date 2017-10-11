/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professional_info_edu', {
    UniqueID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SchoolName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SchoolingSummary: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SchoolDatefrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SchoolDateto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SchoolLocation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SchoolAchievements: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SchoolKeyPositionsHeld: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CertificationsInSchool: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CollegeName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Collegesummary: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CollegeDateFrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CollegeDateTo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CollegeLocation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CollegeAchievements: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CollegeKeyPositionsHeld: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CertificationsInCollege: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USERID: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    tableName: 'professional_info_edu'
  });
};
