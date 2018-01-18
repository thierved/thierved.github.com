
$('#menu').on('click', function(){
  $('#list-menu').toggleClass('show-menu');
});

if ($('window').width > 625) {
  $('#list-menu').removeClass('show-menu');
}
