
// Funcion para el Datepicker
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

// Funcion para el efecto parallax
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});
 
// Funcion para el menu lateral
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Funcion para el menu dropdown
document.addEventListener('DOMContentLoaded', function() {
  var drop = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(drop,{
    coverTrigger: false
  })  
});

// Funcion para el side nav

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

