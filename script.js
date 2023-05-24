$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        // Get the values from the form
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        // Send an email to the contact form email address
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function (response) {
                // Show the message "We will contact you soon"
                $("#contact-message").text("We will contact you soon");
            }
        });
    });
});
