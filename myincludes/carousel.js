var starting=3;
$(document).ready(function(){
	
	$('.caroseldata .carousel_item').each(function(){
		
		$('#caro').append($(this).find('.image').html());
		
	});
	createCarousel();
});


function createCarousel()
{
 $('div#caro').roundabout({
 	startingChild: window.starting,
	childSelector: 'img',
		tilt: -4.5,
		minOpacity:1,
		minScale: .45,
		duration: 1200,
 	    clickToFocus:true,
 	    clickToFocusCallback:showCaption
 });	
 

	createButton();
	showCaption();
}

function createButton(){
	$('.nextItem').click(function(){
		hideCaption();
		$('div#caro').roundabout('animateToNextChild',showCaption);
		
		
	});
	$('.prevItem').click(function(){
		hideCaption();
		$('div#caro').roundabout('animateToPreviousChild',showCaption);
		
		
	});
		$('div#caro img').click(function(){
		hideCaption();
	});
}

function hideCaption(){
	$('#captions').animate({'opacity':0}, 250);
}
function showCaption(){
	var childInfocus= $('div#caro').data('roundabout').childInFocus;
	var setCaption= $('.caroseldata .carousel_item .caption:eq('+ childInfocus+')').html();
	$('#captions').html(setCaption);
    var newHeight= $('#captions').height()+'px';
    $('.captioncontainer').animate({'height':newHeight},500,function(){
    	$('#captions').animate({'opacity':1},250);
    });
   
}













