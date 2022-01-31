function validateEmail(email) {
    var re = /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/;
    return re.test(email);
}

$(document).ready(function() {
    $("#submit").click(function(e) {
        var email = $(`#email`).val();

        if (validateEmail(email)) {
            console.log(`Hi ${email} is a valid Email`)
            $(".error").css("display", "none");
            $(".errorImg").css("display", "none");
        } else {
            e.preventDefault();
            $(".error").html(`<span>Please provide a valid email</span>`).css("display", "block");
            $(".errorImg").html(`<img src="images/icon-error.svg" alt="errorImg">`).css("display", "block");
        }
    });
});