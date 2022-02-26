/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });


    var prealoadImage = function(callback){
        var images =[]
        $("#preload img").each(function(){
            //alert($(this).attr('src'));
            images.push($(this).attr('src'))
        });
        preloadPictures(images, function(){
            if(callback){
                callback()
            }
        });
    }

    var preloadPictures = function(pictureUrls, callback) {
        var i,
            j,
            loaded = 0;
    
        for (i = 0, j = pictureUrls.length; i < j; i++) {
            (function (img, src) {
                img.onload = function () {                               
                    if (++loaded == pictureUrls.length && callback) {
                        callback();
                    }
                };
    
                // Use the following callback methods to debug
                // in case of an unexpected behavior.
                img.onerror = function () {};
                img.onabort = function () {};
    
                img.src = src;
            } (new Image(), pictureUrls[i]));
        }
    };
    

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
    var rndInt = randomIntFromInterval(1, 9);
    var updateBackImage = function(imgNum){
        var imageUrl = "./src/img/slider/shop_image_"+imgNum+".jpg";
        //alert(imageUrl)
        $("header").css("background-image", "url(" + imageUrl + ")");
    }
    prealoadImage(function(){
        
    });
    updateBackImage(rndInt);
    setInterval(function(){
        rndInt = randomIntFromInterval(1, 9);
        updateBackImage(rndInt)
    }, 3000);

    var updateImageRandomly = function(){
        
    }

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict


