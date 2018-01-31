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
        $("#results-dump").empty();
        // console.log("click!");
        $(this).attr("disabled", "");
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
                .attr({ "class": "row z-depth-3 grey lighten-3 rounded", "style": "padding: 20px;" }).appendTo("#results-dump");
            var movies = data;

            
            for (var i = 0; i < movies.length; i++) {
                var nominee = movies[i].nominee;
                var addinfo = movies[i].addinfo;
                var id = movies[i].id;
                var won = movies[i].won;
                var category = movies[i].category;
                var tmdbQuery = "https://api.themoviedb.org/3/search/movie?api_key=46ad7326858ee4a152920a2448ba8382&query=" + movies[i].nominee + "&page=1&include_adult=false";
                getPoster(nominee, addinfo, id, tmdbQuery, resultsRow, won, category);

            }
        });
        $(this).removeAttr("disabled");
    });

    $(document).on("click", ".user-movie-add", function () {
        var id = $(this).attr("data-id");
        var poster = $("#posterid-" + id).attr("src");
        var nominee = $(this).attr("data-nominee");
        var category = $(this).attr("data-category");
        var addinfo = $(this).attr("data-addinfo");
        console.log($(this).attr("data-won"));
        if ($(this).attr("data-won") == "YES") {
            var won = true
        }
        else {
            var won = false
        }
        var query = {
            movieid: id,
            poster: poster,
            nominee: nominee,
            category: category,
            addinfo: addinfo,
            won: won
        };
        $.post("/api/usermovies", query, function (data) {
            Materialize.toast(nominee + ' added to your watchlist!', 4000);
        });
    });
});

function getPoster(nominee, addinfo, id, tmdbQuery, resultsRow, won, category) {
    $.get(tmdbQuery, function (moviedb) {

        var poster = "http://image.tmdb.org/t/p/w154" + moviedb.results[0].poster_path;
        var newResult = $("<div>").attr("class", "card horizontal deep-purple z-depth-2")
            .html('<div class="card-image"><img src="' + poster + '" id="posterid-' + id + '"></div><div class="card-stacked"><div class="card-content"><h4 style="color: white;">' + nominee + '</h4><h5 style="color: white;">' + addinfo + '</h5></div><div class="card-action"><a class="btn waves-effect waves-light red darken-4 user-movie-add" style="margin-left: 1%;" data-id=' + id + ' data-nominee="'+nominee+'" data-category="'+category+'" data-addinfo="'+addinfo+'" data-won="'+won+'">Add to Watchlist</a></div></div>')
            .appendTo(resultsRow);
        if (won === "YES") {
            $(newResult).removeClass("deep-purple").addClass("amber");
        }
    });
};

function addYears() {

    for (var i = 90; i >= 1; i--) {
        var year = 1927 + i;

        switch (Number(i.toString().split('').pop())) {
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
};