$('document').ready(function(){
	$('img').click(function(){  	
		for(var n = 1; n < 8; n++){
  		  $('body').append('<img style="position:click; top:'+20*n+'px; left:'+20*n+'px;" src="https://www.leftovercurrency.com/wp-content/uploads/2016/11/100-american-dollars-banknote-series-1996-obverse-1.jpg" />');
  	}
  }); 
});