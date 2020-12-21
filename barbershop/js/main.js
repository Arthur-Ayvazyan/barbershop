window.onload = function(){

let mainMap = $('#map');
let body = $('body');
let bodyWidth;
let mapWidth;

// ----------------------- closer--opener ----------------------------

$('.menu-btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
	$('.navList').toggleClass('menu_active');
	$('body').toggleClass('scroll-hidden');
});	
$('.login__btn').on('click', function(e){
	$('.modal-login').addClass('show');
	$('.login__icon').addClass('rotate');
	$('body').addClass('scroll-hidden');
});
$('#login-closer').on('click', function(e){
	$('.modal-login').removeClass('show');
	$('.login__icon').removeClass('rotate');
	$('body').removeClass('scroll-hidden');
});
$('.contact__btn-1').on('click', function(e){
	if(body.width() < 850){
		mainMap.width(body.width() - 80 );
		$('.map-popup__window').width(body.width() - 80 );
			$('.map-popup').width(body.width() - 80 );

			mainMap.height(mainMap.width() );
		$('.map-popup__window').height(mainMap.width() );
			$('.map-popup').height(mainMap.width());

		$('.map-modal').addClass('show');
		return false;
	}
	if(body.width() > 850){
		mainMap.width( 776 );
		$('.map-popup__window').width( 776 );
			$('.map-popup').width( 776 );

			mainMap.height( 572 );
		$('.map-popup__window').height( 572 );
			$('.map-popup').height( 572);
		$('.map-modal').addClass('show');
		return false;
	}

	return;
});

$('#map-closer').on('click', function(e){
	$('.map-modal').removeClass('show');
});

$('.side-bar-opener').on('click', function(e){
	$('body').addClass('scroll-hidden');
	$('.form-block').css("top", "0");
});
$('.side-bar-closer').on('click', function(e){
	$('body').removeClass('scroll-hidden');
	$('.form-block').css("top", "100vh");
});

if(body.width() < 850){
	mainMap.width(body.width() );
}

let navLinks = $('.menu__link');





window.onresize = function(e){
 if(body.width() < 900){
	bodyWidth = body.width();
 	mapWidth = (bodyWidth - 80);
 	mainMap.width(mapWidth);
 	$('.map-popup__window').width(mapWidth)
 	$('.map-popup').width(mapWidth)

	mainMap.height(mainMap.width());
	$('.map-popup__window').height(mainMap.width());
	$('.map-popup').height(mainMap.width());

 }
}
// ----------------------- sliders ----------------------------

		$('.gallery__slider').slick({
		  slidesToShow: 1,
		  arrows: true,
		  infinite: true, 
		  adaptiveHeight: true,
		  appendArrows: $('.gallery-arrow'),
		  prevArrow: $('.gallery-prev'),
		  nextArrow: $('.gallery-next'),

		});

		 $('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-nav'
		});

		$('.slider-nav').slick({
		  arrows: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false,
		  focusOnSelect: true,
		  variableWidth: true,
		  responsive: [
		  
		    {
		      breakpoint: 970,
		      settings: {
		  		variableWidth: false,
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		  		variableWidth: false,
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 680,
		      settings: {
		  		variableWidth: false,
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		  		variableWidth: false,
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});



// ----------------------- map ----------------------------


		// Функция ymaps.ready() будет вызвана, когда
		// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
	 ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center:  [59.938635, 30.323118],
				zoom: 16
			}, {
				searchControlProvider: 'yandex#search'
			}),

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Собственный значок метки',
				balloonContent: 'we always wait you'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'imges/icons/maps.png',
				// Размеры метки.
				iconImageSize: [34, 40],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-12, -70]
			});

		myMap.geoObjects.add(myPlacemark);
	});
	 

} // onload
