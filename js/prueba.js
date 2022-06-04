document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var options = {'yearRange':10}
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
      format : 'dd mmm yyyy',
      defaultDate: Date.now(),
      yearRange: [1920, 2004],
    });

  });


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});
 

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});