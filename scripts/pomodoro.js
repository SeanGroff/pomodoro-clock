$(document).ready(function() {
	$('.breakDecrementer').click(function() {
		var breakVal = $('#breakTime').val();
		if (breakVal > 0) {
			$('#breakTime').val(--breakVal);
		}
	}); 

	$('.breakIncrementer').click(function() {
		var breakVal = $('#breakTime').val();
		console.log(breakVal);
		if (breakVal < 99) {
			$('#breakTime').val(++breakVal);
		}
	});

	$('.sessionDecrementer').click(function() {
		var sessionVal = $('#sessionTime').val();
		if (sessionVal > 0) {
			$('#sessionTime').val(--sessionVal);
		}
	}); 

	$('.sessionIncrementer').click(function() {
		var sessionVal = $('#sessionTime').val();
		if (sessionVal < 99) {
			$('#sessionTime').val(++sessionVal);
		}
	});

	var countDown = function() {
		var minutes = parseInt($('.countdownMinutes').html());
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
				if (seconds === 0 && minutes > 0) {
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
				if (seconds === 1 && minutes === 0) {
					$(this).hide();
					return;
				}
			}
		});
	};
	$('.timerWrapper').click(function() {
		setInterval(countDown, 1000);
	});
});