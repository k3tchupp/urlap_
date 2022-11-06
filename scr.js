function beiras() {
  document.getElementById("nev_elkuldve").textContent =
    document.getElementById("nev").value;

  document.getElementById("cim_elkuldve").textContent =
    document.getElementById("cim").value;

  document.getElementById("tel_elkuldve").textContent =
    document.getElementById("tel").value;
}

function setColor(elem, focus) {
  if (focus) {
    elem.style.background = "#C9C8FB";
  } else {
    elem.style.background = "white";
  }
}