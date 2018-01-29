module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define("User", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      lastname: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      username: {
        type: Sequelize.TEXT
      },
      about: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_login: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active"
      }
      });
  
    User.associate = function(models) {
      // Associating User with Movies
      // Each user has multiple movies to their ID
      // When a User is deleted, also delete any associated Movies
      User.hasMany(models.UserMovie, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  