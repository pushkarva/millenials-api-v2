/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professional_info_work', {
    UniqueID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OrganisationName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IndustryName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RoleTitle: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ProfessionalSummary: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DescriptionInEachCompany: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DateFrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateTo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    JobDuration: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Certifications: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Courses: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Awards: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Accomplishments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USERID: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    tableName: 'professional_info_work'
  });
};
