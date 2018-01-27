module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      
      firstname: {
        type: DataTypes.STRING,
        notEmpty: true
      },

      lastname: {
        type: DataTypes.STRING,
        notEmpty: true
      },

      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      last_login: {
        type: DataTypes.DATE
      },

      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active"
      }
      });
  
    User.associate = function(models) {
      // Associating User with Movies
      // When an User is deleted, also delete any associated Movies
      User.hasMany(models.UserMovie, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  