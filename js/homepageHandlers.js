$(document).ready(function() {
	$('.toggle-box').click(function() {
		toggleBox();
	})
});

function toggleBox() {
	$('.toggle-box').css('background', 'orange');
}