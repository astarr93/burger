// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".eatBurger").on("click", function (event) {
        console.log("here 1")
        var id = $(this).data("id");
        var devoured = { devoured: true, };
        // Send the POST request.
        $.ajax({
            url: "/api/burgers/" + id,
            data: devoured,
            method: "PUT",
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
            burger_name: $("#addBurger").val().trim(),
            devoured: 0,
        };
        $.ajax({
            url: "/api/burgers",
            data: newBurger,
            method: "POST",
        }).then(
            function () {
                location.reload();
            }
        );
    });
});