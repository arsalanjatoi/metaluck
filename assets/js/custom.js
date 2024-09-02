$(document).ready(function () {
    $(".nav-item a").click(function () {
        $(this).parents().siblings('.nav-item').removeClass("active");
        $(this).parent().addClass("active");
    });
});