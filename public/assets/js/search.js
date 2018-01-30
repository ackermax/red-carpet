$(document).ready(function () {
    $('select').material_select();
    $('.datepicker').pickadate({
        selectYears: 90, // Creates a dropdown of 15 years to control year       
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: true // Close upon selecting a date
    });

    addYears();

    $("#search").click(function (e) {
        e.preventDefault();
        // console.log("click!");
        // $(this).attr("disabled", "");
        var query = {};
        if ($("#movie").val().trim()) {
            query.nominee = $("#movie").val().trim();
        }
        query.category = $("#category").val();
        query.year = $("#year").val();
        if ($("#winners").prop("checked")) {
            query.won = "YES";
        }
        console.log(query);

        $.post("/api/movies", query, function (data) {
            var resultsRow = $("<div>")
                .attr({ "class": "row z-depth-3 grey lighten-3 rounded", "style": "padding: 20px;" }).insertAfter("#search-terms");
            var movies = data;

            console.log(movies);
            for (var i = 0; i < movies.length; i++) {
                var nominee = data[i].nominee;
                var addinfo = data[i].addinfo;
                var id = data[i].id;
                var tmdbQuery = "https://api.themoviedb.org/3/search/movie?api_key=46ad7326858ee4a152920a2448ba8382&query=" + movies[i].nominee + "&page=1&include_adult=false";
                console.log(tmdbQuery);
                $.get(tmdbQuery, function (moviedb) {
                    console.log(moviedb);
                    var poster = "http://image.tmdb.org/t/p/w154" + moviedb.results[0].poster_path;
                    var newResult = $("<div>").attr("class", "row amber darken-4 z-depth-2")
                        .html('<img src="' + poster + '" align="right"><h3 style="padding-top:1%;margin-left: 1%; color: white;">' + nominee + '</h3><h5 style="margin-left: 1%; color:rgb(61, 61, 61);">' + addinfo + '</h5><br><br><br><a class="btn waves-effect waves-light red darken-4" style="margin-left: 1%;" data-id=' + id + '>Add to Watchlist</a>')
                        .appendTo(resultsRow);
                });
            }
        });
    });
});


function addYears() {

    for (var i = 90; i >= 1; i--) {
        var year = 1927 + i;
        switch (i) {
            case 1:
                var suffix = "st";
                break;

            case 2:
                var suffix = "nd";
                break;

            case 3:
                var suffix = "rd";
                break;

            default:
                var suffix = "th";
        }

        var yearString = "(" + i + suffix + ")";
        if (i <= 6) {
            switch (i) {
                case 1:
                    year = "1927/28";
                    break;
                case 2:
                    year = "1928/29"
                    break;
                case 3:
                    year = "1929/30"
                    break;
                case 4:
                    year = "1930/31"
                    break;
                case 5:
                    year = "1931/32"
                    break;
                case 6:
                    year = "1932/33"
                    break;
            }
        }
        var yearString = year + " " + yearString;
        $("#year").append('<option value="' + yearString + '">' + year + '</option>');
    }
    $('select').material_select();
}