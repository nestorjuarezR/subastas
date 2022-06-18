(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
    $('.datepicker').datepicker({
      selectYears: 90,
    format: 'yyyy-mm-dd'
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
