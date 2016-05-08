        $(document).ready(function() {
            
            $('.section').css('height',$( window ).height());
            $('.section').css('box-shadow','1px 5px 10px #888888');
            $('.second').css('height',$( window ).height()*0.75);
    /*$('#fullpage').fullpage({css3: true,
    scrollingSpeed: 1000,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5});*/
$( window ).on( 'scroll', function() {

			// Floating Header
			if ( $( window ).scrollTop() > 60 ) {
				$( '.header-floating' ).addClass( 'floating' );
			} else {
				$( '.header-floating' ).removeClass( 'floating' );
			}
		});
    setInterval(function(){

    var a = ['url(./assets/spices1.jpg)','url(./assets/spices2.jpg)','url(./assets/spices3.jpg)']

    //console.log(a);
    $('.first').css('background-image',a[Math.floor(Math.random() * a.length)]);

    $('.first').css('-moz-transition',' all 0.3s ease-in');
    $('.first').css('-webkit-transition','all 2s ease-in');
    $('.first').css('-ms-transition','all 2s ease-in');
    $('.first').css('transition','all 2s ease-in');
    //$('.first').css('opacity','0.8');
    
    //filter: alpha(opacity=40);

    }, 3000);
    /*setInterval(function () {
    var s1 = ["RAWDER is a wholesale supplier of raw materials to the food chains aimed at revolutionizing the way the distribution system for food chains work by providing a SPOC model.","We at RAWDER store, provide customers with wide variety of choices on raw materials, customized menu depending on their requirements on quality, quantity and budget for their business","Rawder includes Technology and Analytics to bring insights on purchase data, helping their business to grow."]
    $('.slideshow').css('animation-name','slideInLeft');
    $(".slideshow").html(s1[Math.floor(Math.random() * s1.length)]);
    $('.slideshow').css('-moz-transition',' all 2s ease-in');
    $('.slideshow').css('-webkit-transition','all 2s ease-in');
    $('.slideshow').css('-ms-transition','all 2s ease-in');
    $('.slideshow').css('transition','all 2s ease-in');
    $('.slideshow').css('color','midnightblue');
    


    },5000)*/

    console.log('hello')
    var i = 0;

    });
