$(document).ready(function() {
	var timesUp = false;
	var timerStarted = false;

	$('.breakDecrementer').click(function() {
		decrement('#breakTime');
	}); 

	$('.breakIncrementer').click(function() {
		increment('#breakTime');
	});

	$('.sessionDecrementer').click(function() {
		decrement('#sessionTime');
	}); 

	$('.sessionIncrementer').click(function() {
		increment('#sessionTime');
	});

	var countDown = function() {	
		var minutes = $('#sessionTime').val();
		if (minutes === 0) {
			$('.countdownMinutes').hide();
		}
		$('.countdownSeconds').each(function() {
			var seconds = parseInt($(this).html());
			if (seconds >= 0 && minutes >= 0) {
				if (seconds >= 10) {
					$('.lessThanTenSec').hide();
					$(this).html(seconds - 1);
				}
				if (seconds <= 10) {
					$('.lessThanTenSec').show().html(0);
					$(this).html(seconds - 1);
				}
				if (seconds === 0 && minutes > 0 && !timesUp) {
					timesUp = true;
					seconds = 59;
					minutes--;
					$('.lessThanTenSec').hide();
					$(this).html(seconds);
					$('.countdownMinutes').html(minutes);
				}
				if (minutes === 0) {
					$('.countdownMinutes').hide();
					$('.colon').hide();
				}
				if (seconds === 1 && timesUp) {
					$(this).hide();
					return;
				}
			}
		});
	};

	var timer;	
	$('.timerWrapper').click(function() {
		if (!timerStarted) {
			startTimer();
		}
		else {
			stopTimer();
		}
	});

	var startTimer = function() {
		timerStarted = true;
		timer = setInterval(countDown, 1000);
	};

	var stopTimer = function() {
		timerStarted = false;
		clearInterval(timer);
	}
}); // End of Document Ready function

// getter function to return session or break time amount
var getValue = function(element) {
	return $(element).val();
};

// Decrements the break or session timer
var decrement = function(time) {
	var value = getValue(time);
	if (value > 1) {
		wasTimerUpdated = true;
		return $(time).val(--value);
	}
};

// Increments the break or session timer
var increment = function(time) {
	var value = getValue(time);
	if (value < 99) {
		wasTimerUpdated = true;
		return $(time).val(++value);
	}
};