$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });
}

$("a.thumbnail").click(projectClick);

function projectClick(e) {
  //prevent the page from reloading
  e.preventDefault();
  $(this).css("background-color", "#f2ebe9");
}
