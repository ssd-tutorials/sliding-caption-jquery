$(function() {

	var arr = $('#images li');
	$.each(arr, function() {
		var mess = '<span class="caption">'+$(this).find('img').attr('alt')+'</span>';
		$(this).append(mess);
	});
	
	$('#images li').hover(function() {
		$(this).children('.caption').stop().animate({ top : '100px' }, 200);
	}, function() {
		$(this).children('.caption').stop().animate({ top : '200px' }, 200);
	});

});