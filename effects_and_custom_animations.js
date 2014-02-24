// Pre-requisites
// DO NOT MODIFY
$(function() {
	var hint = 'Enter your 140 character status update.';
	$('#newStatus').focusin( function() {
		if( $(this).val() === hint ) {
			$(this).val('');	
		}
	});
	$('#newStatus').blur( function() {
		if( $(this).val() === '' ) {
			$(this).val(hint);	
		}
	});
});

$('html body').delegate('li.status', 'mouseover', function() {
	$('li.status').mouseover( function() {
		$(this).addClass('zebraOver');
	});
	$('li.status').mouseout( function() {
		$(this).removeClass('zebraOver');
	});
});

$(function() {
	var letterCounter = function(event) {
		var count = $(this).val().length;
		var remaining = 140 - count;
		$('#counter').text(remaining);
		
		if( remaining < 0) {
			$('#tweetButton').attr('disabled','disabled');
		} else if( remaining <= 10) {
			$('#tweetButton').removeAttr('disabled');				
			$('#counter').addClass('danger');
		} else {
			$('#tweetButton').removeAttr('disabled');				
			$('#counter').removeClass('danger');			
		}
	};
	$('#newStatus').keydown(letterCounter);
	$('#newStatus').keyup(letterCounter);
	$('#newStatus').keypress(letterCounter);
});

// Lab 1

// Lab 2

// Lab 3

// Lab 4

// Lab 5

// Lab 6

// Lab 7

// Lab 8

// Lab 9