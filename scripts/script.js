const logo = document.getElementById("logo");
const servicii_link = document.getElementById("servicii-link");
const servicii_dropdown = document.getElementById("servicii-dropdown");
const portofoliu_link = document.getElementById("portofoliu-link");
const portofoliu_dropdown = document.getElementById("portofoliu-dropdown");

logo.addEventListener("click", home);
servicii_link.addEventListener("mouseenter", servicesDropdown);
portofoliu_link.addEventListener("mouseenter", portfolioDropdown);
servicii_dropdown.addEventListener("mouseleave", servicesDropdown);
portofoliu_dropdown.addEventListener("mouseleave", portfolioDropdown);

function home() {
  window.location.href = "./home.html";
}
function servicesDropdown() {
  servicii_dropdown.classList.toggle("show");
}
function portfolioDropdown() {
  portofoliu_dropdown.classList.toggle("show");
}


const hamburger = document.querySelector(".hamburger");
const hamburger_menu = document.querySelector(".hamburger-menu");
const black_tint = document.querySelector(".black-tint");

hamburger.addEventListener("click", showMenu);

function showMenu() {
  hamburger.classList.toggle("active");
  hamburger_menu.classList.toggle("active");
  black_tint.classList.toggle("active");
}
window.onscroll = function () {  
  if(hamburger_menu.classList.contains("active"))
    showMenu();
}


const intent_btn = document.getElementById("intent-btn");
const pop_up = document.getElementById("pop-up");
const close_pop_up = document.getElementById("close-pop-up");
const input_nume = document.getElementById("input-nume");
const input_email = document.getElementById("input-email");
const input_serviciu = document.getElementById("input-serviciu");
const send_email_button = document.getElementById("send-email-button");
var nume,email,serviciu;

intent_btn.addEventListener("click", popUp);
close_pop_up.addEventListener("click", closePopUp);
send_email_button.addEventListener("click", sendEmail);

function popUp() {
  pop_up.style.display = "flex";
}
function closePopUp() {
  pop_up.style.display = "none";
}

function sendEmail() {
  nume = input_nume.value; 
  email = input_email.value; 
  serviciu = input_serviciu.value; 
  if(nume == "" ||  email == "" || serviciu == "" || nume == null ||  email == null || serviciu == null)
    alert("Completați câmpurile!");
  else{
    Email.send({
      Host: "smtp.gmail.com",
      Username: "homexpiu@gmail.com",
      Password: "Trimiteremail",
      To: email,
      From: "homexpiu@gmail.com",
      Subject: "Dragă, " + nume,
      Body: serviciu,
    })
      .then(function (message) {
        alert("Mail-ul a fost trimis! Vă mulțumim")
        pop_up.style.display = "none";
        input_nume.value = "";
        input_email.value = "";
        input_serviciu.value = "";
      });
  }
}


const portfolio_buttons = document.getElementsByClassName("portfolio-button");
const portfolio_toate = document.getElementById("portfolio-toate");
const portfolio_case = document.getElementById("portfolio-case");
const portfolio_finisaje = document.getElementById("portfolio-finisaje");
const portfolio_instalatii = document.getElementById("portfolio-instalatii");
const portfolio_renovari = document.getElementById("portfolio-renovari");
const portfolio_images = document.getElementsByClassName("portfolio-column");

portfolio_toate.addEventListener("click", portfolioToate);
portfolio_case.addEventListener("click", portfolioCase);
portfolio_finisaje.addEventListener("click", portfolioFinisaje);
portfolio_instalatii.addEventListener("click", portfolioInstalatii);
portfolio_renovari.addEventListener("click", portfolioRenovari);

function portfolioToate() {
  if(!portfolio_toate.classList.contains("active")){
    portfolio_toate.classList.toggle("active");
    var i;
    for (i = 0; i < portfolio_buttons.length; i++) {
      if (portfolio_buttons[i].classList.contains("active") && portfolio_toate != portfolio_buttons[i]) {
        portfolio_buttons[i].classList.toggle("active");
      }
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(portfolio_images[i].classList.contains("hide"))
        portfolio_images[i].classList.toggle("hide");
    }
  }
}
function portfolioCase() {
  if(!portfolio_case.classList.contains("active")){
    portfolio_case.classList.toggle("active");
    var i;
    for (i = 0; i < portfolio_buttons.length; i++) {
      if (portfolio_buttons[i].classList.contains("active") && portfolio_case != portfolio_buttons[i]) {
        portfolio_buttons[i].classList.toggle("active");
      }
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(portfolio_images[i].classList.contains("hide"))
        portfolio_images[i].classList.toggle("hide");
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(!portfolio_images[i].classList.contains("case"))
        portfolio_images[i].classList.toggle("hide");
      else
        portfolio_images[i].classList.remove("hide");
    }
  }
}
function portfolioFinisaje() {
  if(!portfolio_finisaje.classList.contains("active")){
    portfolio_finisaje.classList.toggle("active");
    var i;
    for (i = 0; i < portfolio_buttons.length; i++) {
      if (portfolio_buttons[i].classList.contains("active") && portfolio_finisaje != portfolio_buttons[i]) {
        portfolio_buttons[i].classList.toggle("active");
      }
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(portfolio_images[i].classList.contains("hide"))
        portfolio_images[i].classList.toggle("hide");
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(!portfolio_images[i].classList.contains("finisaje"))
        portfolio_images[i].classList.toggle("hide");
      else
        portfolio_images[i].classList.remove("hide");
    }
  }
}
function portfolioInstalatii() {
  if(!portfolio_instalatii.classList.contains("active")){
    portfolio_instalatii.classList.toggle("active");
    var i;
    for (i = 0; i < portfolio_buttons.length; i++) {
      if (portfolio_buttons[i].classList.contains("active") && portfolio_instalatii != portfolio_buttons[i]) {
        portfolio_buttons[i].classList.toggle("active");
      }
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(portfolio_images[i].classList.contains("hide"))
        portfolio_images[i].classList.toggle("hide");
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(!portfolio_images[i].classList.contains("instalatii"))
        portfolio_images[i].classList.toggle("hide");
      else
        portfolio_images[i].classList.remove("hide");
    }
  }
}
function portfolioRenovari() {
  if(!portfolio_renovari.classList.contains("active")){
    portfolio_renovari.classList.toggle("active");
    var i;
    for (i = 0; i < portfolio_buttons.length; i++) {
      if (portfolio_buttons[i].classList.contains("active") && portfolio_renovari != portfolio_buttons[i]) {
        portfolio_buttons[i].classList.toggle("active");
      }
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(portfolio_images[i].classList.contains("hide"))
        portfolio_images[i].classList.toggle("hide");
    }
    for(i = 0; i < portfolio_images.length; i++) {
      if(!portfolio_images[i].classList.contains("renovari"))
        portfolio_images[i].classList.toggle("hide");
      else
        portfolio_images[i].classList.remove("hide");
    }
  }
}


var client_index = 0;
var client_pics = [];
var client_names = [];
var client_locations = [];
var client_review = [];
client_pics[0] = "./assets/client-1.jpeg";
client_pics[1] = "./assets/client-2.jpg";
client_pics[2] = "./assets/client-3.jpg";
client_names[0] = "Leonard Pârgaru";
client_names[1] = "Adriana Țirtea";
client_names[2] = "Daniel Pop";
client_locations[0] = "Sânmartin, Bihor";
client_locations[1] = "Florești, Cluj";
client_locations[2] = "Oradea, Bihor";
client_review[0] = "Dacă vreți o treabă bine facută, de calitate, rapidă și eficientă, puteți apela cu încredere la serviciile firmei Homex SRL, unde veți găsi oameni de treabă, profesioniști, specialiști în amenajări interioare (rețele electrice, zugrăveli, tencuit, pus parchet, gresie, faianță), practic tot ceea de ce are nevoie omul în casă. Știu că eu am făcut-o și nu regret absolut deloc, au lucrat rapid, de calitate si la prețuri acceptabile! Recomand cu caldura!";
client_review[1] = "Dacă vrei o casă pe termen lung și pusă la punct apelează cu încredere la firma Homex SRL. Eu una sunt foarte mulțumită de aceștia și îi recomand cu drag!";
client_review[2] = "Recomand Homex! Profesionalismul și experiența își spun cuvântul!! Un constructor care folosește materiale de calitate. Atât izolarea fonică, cât și cea termică este foarte bună.";

const review_squares = document.getElementsByClassName("review-square");
review_squares[0].classList.toggle("this-review");

const client_image = document.getElementById("client-img");
const client_name = document.getElementById("client-name-text");
const client_location = document.getElementById("client-location-text");
const review_text = document.getElementById("review-text");
const left_review_button = document.getElementById("left-review-btn");
const right_review_button = document.getElementById("right-review-btn");
const review_div = document.getElementById("review-div");

left_review_button.addEventListener("click", leftReview);
right_review_button.addEventListener("click", rightReview);

function leftReview() {
  if(client_index == 0)
    client_index = 2;
  else
    client_index--;
  var i;
  for(i = 0; i < review_squares.length; i++)
    if(i == client_index && !review_squares[i].classList.contains("this-review"))
      review_squares[i].classList.toggle("this-review");
    else if(review_squares[i].classList.contains("this-review"))
      review_squares[i].classList.remove("this-review");

  client_image.src = client_pics[client_index];
  client_name.innerHTML = client_names[client_index];
  client_location.innerHTML = client_locations[client_index];
  review_text.innerHTML = client_review[client_index];
}
function rightReview() {
  if(client_index == 2)
    client_index = 0;
  else
    client_index++;
  var i;
  for(i = 0; i < review_squares.length; i++)
    if(i == client_index && !review_squares[i].classList.contains("this-review"))
      review_squares[i].classList.toggle("this-review");
    else if(review_squares[i].classList.contains("this-review"))
      review_squares[i].classList.remove("this-review");
  client_image.src = client_pics[client_index];
  client_name.innerHTML = client_names[client_index];
  client_location.innerHTML = client_locations[client_index];
  review_text.innerHTML = client_review[client_index];
}

review_div.addEventListener('touchstart', handleTouchStart, false);        
review_div.addEventListener('touchmove', handleTouchMove, false);

var x_down = null;                                                        
function getTouches(event) {
  return event.touches || event.originalEvent.touches;
}                                                                                                                       
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    x_down = firstTouch.clientX;                                                                       
};                                                
                                                                         
function handleTouchMove(evt) {
    if (!x_down) {
        return;
    }

    var x_up = evt.touches[0].clientX;                                    
    var x_diff = x_down - x_up;
                                                                         
    if (x_diff > 0)
      rightReview();
    else
      leftReview();

    x_down = null;                                          
};
