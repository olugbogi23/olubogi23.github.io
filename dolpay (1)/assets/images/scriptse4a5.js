$( document ).ready(function() {
	$('<input>', {
		type: "checkbox",
		'name': 'data[captcha]',
		'id': 'captcha',
		'value' : 1
	}).appendTo('#captcha-container');
	$('<label>').attr('for', 'captcha').text(' I am not a spambot').appendTo('#captcha-container');
	
	$('<input>', {
		type: "checkbox",
		'name': 'data[captcha]',
		'id': 'captcha',
		'value' : 1
	}).appendTo('#captcha-container2');
	$('<label>').attr('for', 'captcha').text(' I am not a spambot').appendTo('#captcha-container2');
});

function HorizontalSlider() {
	var $frame  = $('#centered');
	$frame.sly({
		horizontal: 1,
		itemNav: 'centered',
		smart: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		startAt: 1,
		scrollBar: false,
		scrollBy: 1,
		speed: 200,
		elasticBounds: 1,
		easing: 'easeOutExpo',
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1
	})
}