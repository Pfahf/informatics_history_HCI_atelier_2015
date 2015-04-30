/**
 * Created by VeaVictis on 26/04/15.
 */
$(function() {
    $('#Hardware').hover(function() {
        $('.selector').css({'background-image':'url("hardware.jpg")','background-size': '130%'});
        $('#Hardware').css('background-image', 'none');
        $('#Software').css('background-image', 'none');
        $('#Internet').css('background-image', 'none');
        $('#Games').css('background-image', 'none');
        $('#HCI').css('background-image', 'none');

    }, function() {
        // on mouseout, reset the background colour
        $('.selector').css('background-image', 'none');
        $('#Hardware').css('background-image', 'url("hardware.jpg")');
        $('#Software').css('background-image', 'url("software.jpg")');
        $('#Internet').css('background-image', 'url("internet.jpg")');
        $('#Games').css('background-image', 'url("games.jpg")');
        $('#HCI').css('background-image', 'url("hci.jpg")');


    });
});

$(function() {
    $('#Software').hover(function() {
        $('.selector').css({'background-image':'url("software.jpg")','background-size': '150%'});
        $('#Hardware').css('background-image', 'none');
        $('#Software').css('background-image', 'none');
        $('#Internet').css('background-image', 'none');
        $('#Games').css('background-image', 'none');
        $('#HCI').css('background-image', 'none');

    }, function() {
        // on mouseout, reset the background colour
        $('.selector').css('background-image', 'none');
        $('#Hardware').css('background-image', 'url("hardware.jpg")');
        $('#Software').css('background-image', 'url("software.jpg")');
        $('#Internet').css('background-image', 'url("internet.jpg")');
        $('#Games').css('background-image', 'url("games.jpg")');
        $('#HCI').css('background-image', 'url("hci.jpg")');


    });
});




$(function() {
    $('#Internet').hover(function() {
        $('.selector').css({'background-image':'url("internet.jpg")','background-size': '130%'});
        $('#Hardware').css('background-image', 'none');
        $('#Software').css('background-image', 'none');
        $('#Internet').css('background-image', 'none');
        $('#Games').css('background-image', 'none');
        $('#HCI').css('background-image', 'none');

    }, function() {
        // on mouseout, reset the background colour
        $('.selector').css('background-image', 'none');
        $('#Hardware').css('background-image', 'url("hardware.jpg")');
        $('#Software').css('background-image', 'url("software.jpg")');
        $('#Internet').css('background-image', 'url("internet.jpg")');
        $('#Games').css('background-image', 'url("games.jpg")');
        $('#HCI').css('background-image', 'url("hci.jpg")');

    });
});


$(function() {
    $('#Games').hover(function() {
        $('.selector').css('background-image', 'url("games.jpg")');
        $('#Hardware').css('background-image', 'none');
        $('#Software').css('background-image', 'none');
        $('#Internet').css('background-image', 'none');
        $('#Games').css('background-image', 'none');
        $('#HCI').css('background-image', 'none');

    }, function() {
        // on mouseout, reset the background colour
        $('.selector').css('background-image', 'none');
        $('#Hardware').css('background-image', 'url("hardware.jpg")');
        $('#Software').css('background-image', 'url("software.jpg")');
        $('#Internet').css('background-image', 'url("internet.jpg")');
        $('#Games').css('background-image', 'url("games.jpg")');
        $('#HCI').css('background-image', 'url("hci.jpg")');


    });
});


$(function() {
    $('#HCI').hover(function() {
        $('.selector').css({'background-image':'url("hci.jpg")','background-size': '100%'});
        $('#Hardware').css('background-image', 'none');
        $('#Software').css('background-image', 'none');
        $('#Internet').css('background-image', 'none');
        $('#Games').css('background-image', 'none');
        $('#HCI').css('background-image', 'none');

    }, function() {
        // on mouseout, reset the background colour
        $('.selector').css('background-image', 'none');
        $('#Hardware').css('background-image', 'url("hardware.jpg")');
        $('#Software').css('background-image', 'url("software.jpg")');
        $('#Internet').css('background-image', 'url("internet.jpg")');
        $('#Games').css('background-image', 'url("games.jpg")');
        $('#HCI').css('background-image', 'url("hci.jpg")');


    });
});