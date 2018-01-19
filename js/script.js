
$('#menu').on('click', function(){
  let currentHight = $('#list-menu').height();
console.log(currentHight);
  if (currentHight < 200) {

    let newHight = currentHight + 240;
    $('#list-menu').animate({
      'height': newHight + 'px',
      'padding-top': '15px',
      'padding-bottom': '20px'
    }, 500);

  } else {

    $('#list-menu').animate({
      'height': '0px',
      'padding-top': '0px',
      'padding-bottom': '0px'
    },
    500,
    function(){
      $(this).removeAttr('style');
    });
  }

  $(window).resize(function() {
    if ($(this).width() > 625 ) {
      $('#list-menu').removeAttr('style');
    }
  });


});
