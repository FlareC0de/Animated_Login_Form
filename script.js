var signup_link = document.querySelector(".a1");
var login_link = document.querySelector(".a2");

var signup_form = document.querySelector(".signup-form");
var login_form = document.querySelector(".login-form");

var sign_sub = document.querySelector(".sign-sub");
var login_sub = document.querySelector(".log-sub");

sign_sub.addEventListener("click", signupAlert);
login_sub.addEventListener("click", loginpAlert);

function signupAlert(){
    alert("Form Successfully Signup")
};
function loginAlert(){
    alert("You have Successfully Logged in")
};

login_link.addEventListener("click", signup_hide);
signup_link.addEventListener("click", login_hide);

function signup_hide(){
    signup_form.style.display = "none";
    login_form.style.display = "block";
    signup_link.style.background = "#34495e";
    login_link.style.background = "#2981bc";
}
function login_hide(){
    signup_form.style.display = "block";
    login_form.style.display = "none";
    signup_link.style.background = "#2981bc";
    login_link.style.background = "#34495e";
}