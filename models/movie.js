module.exports = function (sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
        year: DataTypes.STRING,
        category: DataTypes.STRING,
        nominee: DataTypes.TEXT,
        addinfo: DataTypes.TEXT,
        won: DataTypes.STRING,
        poster: DataTypes.STRING,
        imdblink: DataTypes.STRING,
    }, {
            timestamps: false
        });

    return Movie;
};