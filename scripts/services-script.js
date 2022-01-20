const servicii_case = document.getElementById("servicii-case");
const servicii_finisaje = document.getElementById("servicii-finisaje");
const servicii_instalatii = document.getElementById("servicii-instalatii");
const servicii_renovari = document.getElementById("servicii-renovari");

servicii_case.addEventListener("click", serviciiCase);
servicii_finisaje.addEventListener("click", serviciiFinisaje);
servicii_instalatii.addEventListener("click", serviciiInstalatii);
servicii_renovari.addEventListener("click", serviciiRenovari);

function serviciiCase() {
  window.location.href = "./servicii-case.html";
}
function serviciiFinisaje() {
  window.location.href = "./servicii-finisaje.html";
}
function serviciiInstalatii() {
  window.location.href = "./servicii-instalatii.html";
}
function serviciiRenovari() {
  window.location.href = "./servicii-renovari.html";
}