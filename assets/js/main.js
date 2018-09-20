document.addEventListener('DOMContentLoaded', function() {
    console.log("materialize js connected");
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 0);
  });