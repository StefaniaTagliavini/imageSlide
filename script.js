onload = start;
var timer;
var i = 1;

function start() {
  function Move() {
    i = (i % 4) + 1; // 4 is the Number of image in slider
    document.getElementById("i" + i).checked = true;
  }
  timer = setInterval(Move, 3000); //change img in 3 sec
}

document.addEventListener("click", ({ target }) => {
  if (
    target.classList.contains("dots") ||
    target.classList.contains("prev") ||
    target.classList.contains("next") ||
    target.classList.contains("prev-sp") ||
    target.classList.contains("next-sp")
  ) {
    clearInterval(timer); //Se clicco un punto specifico fermo lo scroll
    setTimeout(Restart, 10000); //Riparto dopo 10 secondi
    function Restart() {
      i = 1;
      document.getElementById("i1").checked = true;
      timer = setInterval(Move, 3000);
    }
    function Move() {
      i = (i % 4) + 1; // 4 is the Number of image in slider
      document.getElementById("i" + i).checked = true;
    }
  }
});
