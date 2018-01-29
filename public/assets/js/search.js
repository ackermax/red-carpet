$(document).ready(function () {
    $('select').material_select();
    $('.datepicker').pickadate({
        selectYears: 90, // Creates a dropdown of 15 years to control year       
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: true // Close upon selecting a date
    });

    addYears();

    $("#search").click(function(e){
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

        $.post("/api/movies", query, function(data){
            console.log(data);
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