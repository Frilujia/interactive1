
$(document).ready(function(){
	$('#london').click(function(){  	
		for(var i = 1; i < 8; i++){
  		  $('#desktop').append('<img class="big" style="position: absolute;" src="london.jpg" >');
  		}
  	}); 

  $('#iceland').click(function(){    
    for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="iceland.jpg" >');
      }
    }); 

  $('#Morocco').click(function(){    
      for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="Morocco.jpg" >');
      }
    }); 


  $('#France').click(function(){    
    for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="France.jpg" >');
      }
    }); 


  $('#USA').click(function(){    
    for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="USA.jpg" >');
      }
    }); 


  $('#china').click(function(){    
    for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="china.jpg" >');
      }
    }); 


  $('#Canada').click(function(){    
    for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="Canada.jpg" >');
      }
    }); 

  $('#Brazil').click(function(){    
    for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="Brazil.jpg" >');
      }
    }); 

  $('#greenland').click(function(){    
    for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="greenland.jpg" >');
      }
    }); 

  $('#USA2').click(function(){    
    for(var i = 1; i < 8; i++){
        $('#desktop').append('<img class="big" style="position: absolute;" src="USA2.jpg" >');
      }
    }); 

  $(document).on( 'click', '.big', function(){
      $('.big').remove();
      alert('System error: please print out to view high resolution version');
  });


  $('body').on( "mousemove", function(e) {
      // move #position on mouse move
       $('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
       $('#position').html(' '+e.pageY+'°N, '+e.pageX+'°W');
  });

});

