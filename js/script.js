$(function(){
	$('#get-started-submit').click(function(){
		var target = '#logo';
		$('html, body').animate({scrollTop: $(target).offset().top}, 300);
	});
   /*scrolling up*/
	$('#menu_login').on('click', function (){
		popup('#this-login-popup');
	});
	$('.login-popup').on('click', function (){
		popup('#this-login-popup');
	});
	$('#remind').on('click', function (){
		popup('#this-remind-popup');
	});
	$('#submit-signin').on('click', function (){
		return false;
	});
	$('#submit-remind').on('click', function (){
		return false;
	});
	$('#popup').on('click', function (){
		$(this).hide();
		$('#this-login-popup').hide(300);
		$('#this-remind-popup').hide(300);
	});
});

var popup = function (id){
	$('#popup').show();
	$(id).show(300);
};