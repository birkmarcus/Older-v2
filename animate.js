//BusyBox slide sider

$(document).ready(function () {


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





$("#knapTop").click(function () {
        if($('#knapTop').hasClass('activeKnap')) {
            $('#knapTop').removeClass('activeKnap');   
        } else {
            $('#knapTop').addClass('activeKnap');
        }
    });

$("#knapBund").click(function () {
        if($('#knapBund').hasClass('activeKnap')) {
            $('#knapBund').removeClass('activeKnap');   
        } else {
            $('#knapBund').addClass('activeKnap');
        }
    });

$("#knapVenstre").click(function () {
        if($('#knapVenstre').hasClass('activeKnap')) {
            $('#knapVenstre').removeClass('activeKnap');   
        } else {
            $('#knapVenstre').addClass('activeKnap');
        }
    });

$("#knapHojre").click(function () {
        if($('#knapHojre').hasClass('activeKnap')) {
            $('#knapHojre').removeClass('activeKnap');   
        } else {
            $('#knapHojre').addClass('activeKnap');
        }
    });


    //BXSlider
$('.bxslider').bxSlider({});
});






  

//Z-index
/*
  maxZ = $('div:last').css("zIndex");
$("#knapTop").click(function()
    {
        maxZ++;
      $('#BusyBox1').css('z-index',maxZ);           
    }
);
  

   maxZ = $('div:last').css("zIndex");
$("#knapBund").click(function()
    {
        maxZ++;
      $('#BusyBox2').css('z-index',maxZ);           
    }
);  

     maxZ = $('div:last').css("zIndex");
$("#knapVenstre").click(function()
    {
        maxZ++;
      $('#BusyBox3').css('z-index',maxZ);           
    }
);
    maxZ = $('div:last').css("zIndex");
$("#knapHojre").click(function()
    {
        maxZ++;
      $('#BusyBox4').css('z-index',maxZ);           
    }
);
*/


