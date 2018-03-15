$(document).ready(function(){
	$('body').mousemove(function(e){
		// $('#position').html('Position X : ' + e.pageX + '<br />Position Y : ' + e.pageY);
		// try switching the 'top' and 'left' values
		$('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
		
	});


	$('img').click(function(){
		$(this).addClass('move');
	});

	$('#click-area').click(function(){
		var clone = $('#position').clone();
		$('body').append(clone);
	});



});