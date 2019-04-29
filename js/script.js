 // fixed header
 // ================================================
   $(window).on('scroll', function(){

        if( $(window).scrollTop()>60 ){

        $('.header').addClass('fixed_header animated fadeInDown');
        } 
        else {

        $('.header').removeClass('fixed_header animated fadeInDown');

        }

    }); 





 $('.counter').counterUp({
       delay: 10,
       time: 1000
      });

 /* ----------------------------------------------------------- */
  /*  Owl Carousel
  /* ----------------------------------------------------------- */


    //Testimonial

    $("#testimonial-carousel").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 600,
      pagination:true,
      singleItem:true
 
    });

    // Custom Navigation Events
    var owl = $("#testimonial-carousel");


    // Custom Navigation Events
    $(".next").click(function(){
      owl.trigger('owl.next');
    })
    $(".prev").click(function(){
      owl.trigger('owl.prev');
    })
    $(".play").click(function(){
      owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
      owl.trigger('owl.stop');
    })
    

// sldier
//====================================================

    