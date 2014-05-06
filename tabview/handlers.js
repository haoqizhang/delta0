$(document).ready(function() {
  console.log('ready');
  $('.toggle-box').click(function() {
    toggleBox();
  })
});

function toggleBox() {
  $('.toggle-box').toggleClass('color1 color2');
}