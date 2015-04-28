$(document).ready(function() {
	$('.call-me').click(function(){
   		if($('#call-me').attr('visible')!='true'){
	   		$('.form-mask').fadeIn(400);
	        $('#call-me').fadeIn(400);
	        $('#call-me').attr({'visible':'true'})
	  	}
	  	else{
   			$('.form-mask').fadeOut(400);
        	$('#call-me').fadeOut(400);
	        $('#call-me').attr({'visible':'false'})
	  	}
	})
	$('.leave-bid').click(function(){
   		if($('#application').attr('visible')!='true'){
	   		$('.form-mask').fadeIn(400);
	        $('#application').fadeIn(400);
	        $('#application').attr({'visible':'true'})
	  	}
	  	else{
   			$('.form-mask').fadeOut(400);
        	$('#application').fadeOut(400);
	        $('#application').attr({'visible':'false'})
	  	}
	})
	$('#click-modal-1').click(function(){
   		if($('#modal-1').attr('visible')!='true'){
	   		$('.form-mask').fadeIn(400);
	        $('#modal-1').fadeIn(400);
	        $('#modal-1').attr({'visible':'true'})
	  	}
	  	else{
   			$('.form-mask').fadeOut(400);
        	$('#modal-1').fadeOut(400);
	        $('#modal-1').attr({'visible':'false'})
	  	}
	})
	$('#click-modal-2').click(function(){
   		if($('#modal-2').attr('visible')!='true'){
	   		$('.form-mask').fadeIn(400);
	        $('#modal-2').fadeIn(400);
	        $('#modal-2').attr({'visible':'true'})
	  	}
	  	else{
   			$('.form-mask').fadeOut(400);
        	$('#modal-2').fadeOut(400);
	        $('#modal-2').attr({'visible':'false'})
	  	}
	})
 $('.form-mask, .closed').click(function(){
   		$('.form-mask').fadeOut(400)
        $('#call-me,#application,.modal').fadeOut(400)
        $('#call-me,#application,.modal').attr({'visible':'false'})
	})
});

function popup_position(){
         var my_popup = $('.modal'),
                 my_popup_w = my_popup.width(),
                 my_popup_h = my_popup.height(),
                 popup_half_w = my_popup_w/2,
                 popup_half_h = my_popup_h/2,
                 win_w = $(window).width(),
                 win_h = $(window).height();
 
         if ( win_w > my_popup_w ) { 
                 my_popup.css({'margin-left':-popup_half_w, 'left': '49%'});
         }
         if ( win_w < my_popup_w ) {                
                 my_popup.css({'margin-left': 5, 'left': '0'});
         }
         if ( win_h > my_popup_h ) { 
                 my_popup.css({'margin-top': -popup_half_h, 'top':'51%'});
         }
         if ( win_h < my_popup_h ) { 
                 my_popup.css({'margin-top': 5, 'top': '0'});
         }
 }

        $(document).ready(function(){ 
    popup_position();
    });
    $(window).resize(function(){  
    popup_position();
    });