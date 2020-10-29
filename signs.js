//reach elements
var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");
//click to sign in page

signInBtn.addEventListener("click", function(){
    document.getElementById("signUpPage").style.display = "none";
    document.getElementById("signInPage").style.display = "block";
    //document.getElementById("signIpPage").classList.add(".fadeIn")


})
//click to sign up page
signUpBtn.addEventListener("click", function(){
    document.getElementById("signInPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "block";
   // document.getElementById("signUpPage").classList.add(".fadeIn")


})

