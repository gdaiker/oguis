/* $(document).ready(function(){
	var sudoSlider = $("#slider").sudoSlider({
    	responsive: true,
        effect: "slide",
        pause: 7000,
        auto:true,
        prevNext:false,
		continuous:true,
	});
                
});*/
		
		
			
//Scroll to Links

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
        return false;
      }
    }
  });
});


//Mobile Nav

$(function() {
    $('#navicon').click(function() {
        if($('#navicon').hasClass('closed')) {
			$('#fade').fadeIn().css({"z-index":"1"});
            $('body').animate({left: "-250px"}, 400);
			$('header').animate({left: "-250px"});
			//$('#navicon').animate({"left": "0"}, 400).css({"z-index":"22"});
            $('#mobile-nav').animate({right: "0"}, 400);
            $(this).removeClass('closed').addClass('open'); 
	}
			
			
        else if($('#navicon').hasClass('open')) {
            $('body').css({"position":"relative"}).animate({left: "0"}, 400);
            $('#mobile-nav').animate({right: "-250px"}, 400);
            $(this).removeClass('open').addClass('closed');
			$('header').animate({left: "0"});
            $('#fade').fadeOut(); }
    });
	
});


$(function() {
    $(".mobile-link").click(function(){
		$('body').css({"position":"relative"}).animate({left: "0"}, 400);
        $('#mobile-nav').animate({right: "-250px"}, 400);
        $('#navicon').removeClass('open').addClass('closed');
		$('header').animate({left: "0"});
        $('#fade').fadeOut();
	});
});