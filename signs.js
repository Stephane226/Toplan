//reach elements
var signIn = document.getElementById("signInBtn");
var signUp = document.getElementById("signUpBtn");
//click to sign in page

signIn.addEventListener("click", function(){
    document.getElementById("signInPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "block";
    document.getElementById("signUpPage").classList.add(".fadeIn")


})
//click to sign up page
signUp.addEventListener("click", function(){
    document.getElementById("signInPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "block";
    document.getElementById("signUpPage").classList.add(".fadeIn")


})

