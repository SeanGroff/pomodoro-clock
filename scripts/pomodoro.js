$(document).ready(function() {
	var countDown = function() {
		$('.countdownSeconds').each(function() {
			var seconds = parseInt($(this).html());
			while (seconds !== 0) {
				if (seconds < 10) {
					$(this).html("0" + seconds - 1);
				} else {
					$(this).html(seconds - 1);
				}
			}
		});
	};

	setInterval(countDown, 1000);
});