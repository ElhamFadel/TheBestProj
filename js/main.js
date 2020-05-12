$(document).ready(function(){
	// $btns=$('.project_area .button-group .button');//array
	// $btns.click(function(e){
	// 	$('.project_area .button-group .button').removeClass("active");//remove ctive class from all btn 
	// 	// target to get current btn
	// 	e.target.classList.add('active');//and thats to fetch btn that click in it 
	// 	selector=$('e.target').attr('data-filter');
	// 	$('.project_area .button-group .button').isotope({
	// 		filter:selector
	// 	});
	// 	return false;

	// });
	let $btns = $('.project_area .button-group button');

    $btns.click(function (e) {
        $('.project_area .button-group button').removeClass('active');
        
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project_area .grid').isotope({
            filter: selector

        });

        return false;
    });
    $('.project_area .button-group button #btn1').trigger("click");
    $('.project_area .grid  .test-popup-link').magnificPopup({
  type: 'image',
  // other options
   gallery: { enabled: true }
});
    //owl-carousel
    $(".about_area .carousel .owl-carousel").owlCarousel({
    	loop:true,
    	autoplay:true,
    	dots:true,
    	responsive:{
    		0:{
    			items:1
    		},
    		544:{
    			items:2
    		}
    	}


    })
    //sticky navigation
//     let nav_offset_top=$('.header_area').height()+50;
//     function navbarFixed(){
//     if ($('.header_area').length) {
//     	$(window).scroll(function(){
//     		let scroll=$(window).scrollTop();
//     		if(scroll>=nav_offset_top){
//     			$('.header_area .main_menu').addClass('navbar_fixed');
//     		}else{
//     			$('.header_area .main_menu').removeClass('navbar_fixed');

//     		}
//     	})
//     }

// }
// navbarFixed();

















});