$("#find-movie").on("click", function (event) {

    event.preventDefault();

    var movie = $("#movie-input").val();
// Updated API to poster API only
    var queryURL = "http://img.omdbapi.com/?apikey=trilogy&" + movie;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        $("#movie-view").text(JSON.stringify(response));
    });
    
});