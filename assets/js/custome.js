$(document).ready(function () {

    (function () {
        var hasClass = $('#header').hasClass('header-top');
        if (hasClass == true) {
            $('#canvas').hide();
        } else {
            $('#canvas').show();
        }
    })();

    $('[canvas="true"]').click(function () {
        $('#canvas').show();
    });

    $('[canvas="false"]').click(function () {
        $('#canvas').hide();
    });

});