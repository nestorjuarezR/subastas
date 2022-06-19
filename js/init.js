(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown({
        hover: false,
        coverTrigger: false,
        alignment: 'center',
        constrainWidth: true
    });
    $('.datepicker').datepicker({
      selectYears: 90,
      format: 'yyyy-mm-dd',
      yearRange: [1910, 2022]
  });
  $('.slider').slider({
    indicators: false
  });
  }); // end of document ready
})(jQuery); // end of jQuery name space

