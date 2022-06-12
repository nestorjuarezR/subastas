
// Funcion para el Datepicker
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var options = {'yearRange':10}
    var elems_date= document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems_date, {
      format : 'dd mmm yyyy',
      defaultDate: Date.now(),
      yearRange: [1920, 2004],
    });

  });

// Funcion para el efecto parallax
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);

  //Sidenav
  var sidenav_ = document.querySelectorAll('.sidenav');
  var instances_sidenav = M.Sidenav.init(sidenav_);
});
 
// Funcion para el menu lateral

// Funcion para el menu dropdown
document.addEventListener('DOMContentLoaded', function() {
  var drop = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(drop,{
    coverTrigger: false
  })  
});
