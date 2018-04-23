

$('document').ready(function(){
	$('img').click(function(){  	
		for(var n = 1; n < 8; n++){
  		  $('#desktop').append('<img class="big" style="position: absolute; top:'+20*n+'px; left:'+20*n+'px;" src="LONDON.png" />');
  		}
  	}); 

	$(document).on( 'click', '.big', function(){
		alert('hi');
  	});

});

