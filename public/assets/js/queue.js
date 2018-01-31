$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $(document).on("click", ".where-watch", function (e) {
        e.preventDefault();
        console.log('click');
        var movie = $(this).attr("nominee");
        var query = {
            movie: movie
        };
        $.post("/api/amazon", query, function(data){
            $("#modal-fill").empty();
            $("#modal-fill").html('<h4 id="watch" class="brand-red">Buy on Amazon</h4><br><a class="waves-effect waves-light btn center orange" href="' + data + '" target="_blank">'+ movie + '</a>');
            $("#modal1").modal("open");
        });
    });

    $(".watched-button").click(function (e) {
        e.preventDefault();
        var id = $(this).attr("data-id");
        $("#modal-fill").empty();
        $("#modal-fill").html('<h4 class="brand-red">Out of five stars, how do you rate this film?</h4><div class="input-field brand-red"><select id="movie-rating" name="movie-rating"><option value="1" disabled selected>Rating</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><a class="waves-effect waves-light btn modal-trigger right green" href="#" id="rating-submit" data-id="' + id + '">Submit Rating</a><a class="waves-effect waves-light btn modal-trigger left red" href="#" id="movie-delete" data-id="' + id + '">Delete Movie</a>');
        $("select").material_select();
        $("#modal1").modal("open");
    });

    $(document).on("click", "#rating-submit", function (e) {
        e.preventDefault();
        var id = $(this).attr("data-id");
        var rating = $("#movie-rating").val();
        var query = {
            id: id,
            rating: rating,
            watched: true
        };
        $.ajax({
            method: "PUT",
            url: "/api/usermovies/update",
            data: query
        }).then(function () {
            window.location.href = "/profile";
        });
    });

    $(document).on("click", "#movie-delete", function (e) {
        e.preventDefault();
        var id = $(this).attr("data-id");
        $.ajax({
            method: "DELETE",
            url: "/api/usermovies/delete/" + id
        })
            .then(function () {
                window.location.href = "/profile";
            })
    });
});