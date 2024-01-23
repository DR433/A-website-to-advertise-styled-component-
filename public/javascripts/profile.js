$(document).ready(function () {
    $("#slideImageBtn").on("click", function () {
        $(".userCard").addClass("bounceOutLeft");
        setTimeout(function () {
            $(".userCard").css("display", "none");
        }, 300);
    });
});
