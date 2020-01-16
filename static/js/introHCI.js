var colors = ['#027373', '#014040', '#038C7F', '#AABFB9'];
var random_color = colors[Math.floor(Math.random() * colors.length)];

$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').css('color', random_color);
            });
}

$("a.thumbnail").click(projectClick);
function projectClick(e) {
  //prevent the page from reloading
  e.preventDefault();
  $(this).css('background-color', '#AABFB9');
}
