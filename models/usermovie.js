module.exports = function (sequelize, DataTypes) {
  var UserMovie = sequelize.define("UserMovie", {
    watched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    movieid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    useremail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nominee: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addinfo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    won: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return UserMovie;
};
