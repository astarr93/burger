// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var isDevoured = { devoured: true, };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured,
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#devoured").val().trim(),
            devoured: 0,
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
