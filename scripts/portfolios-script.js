const portofoliu_case = document.getElementById("portofoliu-case");
const portofoliu_finisaje = document.getElementById("portofoliu-finisaje");
const portofoliu_instalatii = document.getElementById("portofoliu-instalatii");
const portofoliu_renovari = document.getElementById("portofoliu-renovari");

portofoliu_case.addEventListener("click", portofoliuCase);
portofoliu_finisaje.addEventListener("click", portofoliuFinisaje);
portofoliu_instalatii.addEventListener("click", portofoliuInstalatii);
portofoliu_renovari.addEventListener("click", portofoliuRenovari);

function portofoliuCase() {
  window.location.href = "./portofoliu-case.html";
}
function portofoliuFinisaje() {
  window.location.href = "./portofoliu-finisaje.html";
}
function portofoliuInstalatii() {
  window.location.href = "./portofoliu-instalatii.html";
}
function portofoliuRenovari() {
  window.location.href = "./portofoliu-renovari.html";
}