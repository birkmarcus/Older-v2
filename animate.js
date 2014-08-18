//BusyBox slide sider

$(document).ready(function () {
  /*
    var flag1 = 1;
    var flag2 = 1;
    var flag3 = 1;
    var flag4 = 1;
    $("#knapTop").click(function () {
        if (flag1 == 1) {
            $('#BusyBox1').stop(true).animate({
                'height': '50%',
                'opacity': '1'
            }, {
                queue: false,
                duration: 800,
                easing: 'easeInSine'
            });
            flag1 = 0;
        } else {
            $('#BusyBox1').stop(true).animate({
                'height': '0%',
                'opacity': '1'
            }, {
                queue: false,
                duration: 800,
                easing: 'easeOutSine'
            });
            flag1 = 1;
        }

        return false;
    });



     $("#knapBund").click(function () {
        if (flag2 == 1) {
            $('#BusyBox2').stop(true).animate({
                'height': '50%',
                'opacity': '1'
            }, {
                queue: false,
                duration: 800,
                easing: 'easeInSine'
            });
            flag2 = 0;
        } else {
            $('#BusyBox2').stop(true).animate({
                'height': '0%',
                'opacity': '1'
            }, {
                queue: false,
                duration: 800,
                easing: 'easeOutSine'
            });
            flag2 = 1;
        }

        return false;
    });

    $("#knapVenstre").click(function () {
        if (flag3 == 1) {
            $('#BusyBox3').stop(true).animate({
                'left': '0px',
                'opacity': '1'
            }, {
                queue: false,
                duration: 800,
                easing: 'easeInSine'
            });
            flag3 = 0;
        } else {
            $('#BusyBox3').stop(true).animate({
                'left': '-1000px',
                'opacity': '1'
            }, {
                queue: false,
                duration: 800,
                easing: 'easeOutSine'
            });
            flag3 = 1;
        }
            return false;
    });
*/

    $("#knapTop").click(function () {
        if($('#BusyBox1').hasClass('active')) {
            $('#BusyBox1').removeClass('active');   
        } else {
            $('#BusyBox1').addClass('active');
        }
    });

    $("#knapBund").click(function () {
        if($('#BusyBox2').hasClass('active')) {
            $('#BusyBox2').removeClass('active');   
        } else {
            $('#BusyBox2').addClass('active');
        }
    });

    $("#knapVenstre").click(function () {

        if($('#BusyBox3').hasClass('active')) {
            $('#BusyBox3').removeClass('active');   
        } else {
            $('#BusyBox3').addClass('active');
        }

    });

    $("#knapHojre").click(function () {
        if($('#BusyBox4').hasClass('active')) {
            $('#BusyBox4').removeClass('active');   
        } else {
            $('#BusyBox4').addClass('active');
        }
    });

});


//BXSlider


$(document).ready(function(){
  $('.bxslider').bxSlider({
   
});

});