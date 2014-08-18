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


