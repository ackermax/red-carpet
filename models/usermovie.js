module.exports = function(sequelize, DataTypes) {
    var UserMovie = sequelize.define("UserMovie", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    UserMovie.associate = function(models) {
      // We're saying that a UserMovie should belong to an User
      // A UserMovie can't be created without an User due to the foreign key constraint
      UserMovie.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return UserMovie;
  };
  