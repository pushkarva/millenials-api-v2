/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    iduser: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: true
    },
    Mobile: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: true
    },
    Sex: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Orientation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MaritalStatus: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Age: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ProfileVisibility: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MyProfileSummary: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PlaceOfBirth: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CurrentCity: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CitiesLivedIn: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CitiesTravelled: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CitiesLivedinfrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CitiesLivedinto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LanguagesKnown: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Nationality: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Residency: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TemporaryResident: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TouristVisa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Religion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FurtherReligionType: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    LastSeen: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    OtherVisas: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    InterestedIn: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PartnersLookingfor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NoOfKids: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MiddleName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PasswordHash: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'user'
  });
};
