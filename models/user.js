module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING
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
  