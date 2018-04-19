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

$('document').ready(function(){
	$('body').click(function(){  	
		for(var i = 1; i < 8; i++){
  		  $('body').append('<img style="position=clone"; src="https://media1.tenor.com/images/019d4b615d97b7fe2cd2692465485d04/tenor.gif?itemid=7387814" />');
  	}
  }); 
});
