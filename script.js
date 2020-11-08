// Debut de TodoList
//Declaration Des Variablesva
var TodoTitle = document.getElementById("inp");
var TodoDate = document.getElementById("TdDate");
var Sub = document.getElementById("AddTD");
var innerDom = document.getElementById("oneTd");
var number = 1;
var ul = document.createElement("ul");
var alertF = document.getElementById("alertpId");
var leTittre = document.getElementById("leTittre");

//
    

function AddTodo(){
    
    alertF.style.display = "none";
    var dateformat = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    // Match the date format through regular expression
    if(dateformat.test(TodoDate.value) == true && TodoTitle.value != '')
    {
     
innerDom.classList.add("asscl");
       
var TodoContent = `



<div class="oneTdL" id= "lalIste${number}">
<div id="" class="s1 ds1"><span id="numb">${number}</span></div>

  <div  class="ds2 s2"><span class="txt"> ${TodoTitle.value}</span><span id="dateH">2 janvier 2019</span></div>
  <div  id= "doneT${number}" class="ds3 s3 tgt${number}" onclick = "document.getElementById('doneT${number}').style.color = 'green';document.getElementById('nDoneT${number}').style.color = 'black';"> <i class="fas fa-check"></i></div>
  <div  id= "nDoneT${number}" class="ds3a s3a tgf${number}" onclick = "document.getElementById('doneT${number}').style.color = 'black';document.getElementById('nDoneT${number}').style.color = 'red';">  <i class="fas fa-times"></i></div>
  <div  class="ds${number} s4" onClick="this.parentElement.remove()"><i class="fas fa-trash-alt"></i></div>
</div>

`;
//document.getElementById('lalIste${number}').remove()

innerDom.innerHTML += TodoContent;
TodoTitle.value = "";
TodoDate.value = ""
number +=1;}
else{ 
    alertF.style.display = "block";
    alertF.innerHTML = " Please enter valid information";
   
    
}

}



//Manage App
var tDoL_Btn = document.getElementById("tDoLbtn");
var MnM_Btn =document.getElementById("MnMbtn");


tDoL_Btn.addEventListener("click", function(){
    leTittre.innerHTML = " My Todo List"
      alertF.style.display = "none";
      document.getElementById("MnyM").style.display = "none";
      document.getElementById("blockNt").style.display = "none";
      document.getElementById("cnt").style.display = "none";
    document.getElementById("tDoList").style.display = "block";
    document.getElementById("tDoList").classList.add("fadeIn");
    document.getElementById("parameters").style.display = "none";

   

})

MnM_Btn.addEventListener("click", function(){
    leTittre.innerHTML = " My Money Management";
   
    alertF.style.display = "none";
    document.getElementById("tDoList").style.display = "none";
    document.getElementById("MnyM").style.display = "block";
    
    document.getElementById("MnyM").classList.add("fadeIn")
    document.getElementById("MnyM").style.marginTop = "10px";
    document.getElementById("cnt").style.display = "none";
    document.getElementById("blockNt").style.display = "none";
    document.getElementById("parameters").style.display = "none";


})


var budget_Add_Value = document.getElementById("b_a_v");
var budget_add = document.getElementById("b_Add");

var Expense = document.getElementById("exp_A");
var Expense_T = document.getElementById("exp_T");
var Expense_Add = document.getElementById("ad_b")

var budget_Screen = document.getElementById("budget_Screen");
var expense_Screen = document.getElementById("expense_Screen");
var balance_Screen = document.getElementById("balance_Screen");

//add a budget
 

budget_add.addEventListener("click", function(){
    alertF.style.display = "none";

   
        var x1 = budget_Screen.textContent;
        var x2 = parseInt(x1);  
        var x3 = parseInt(budget_Add_Value.value);
    
        budget_Screen.innerHTML =  x2 + x3;
        var x4 = parseInt(balance_Screen.textContent)
        balance_Screen.innerHTML =   x4 + x3;

    budget_Add_Value.value = "";
    //history
  
    var ulList1 = document.getElementById("ulHistorik1");
    var myLiEx1 = `
    <li><span style="color:green" id="dew"><i class="fas fa-plus-square"></i></span><span style="color:green;">${x3}</span> <span>02/04/2009</span><span onClick="budget_Screen.innerHTML = parseInt(budget_Screen.textContent) - parseInt(this.parentElement.children[1].textContent);this.parentElement.remove();balance_Screen.innerHTML = parseInt(balance_Screen.textContent) - parseInt(this.parentElement.children[1].textContent)" style="color:rgb(154, 31, 150)"> <i class="fas fa-trash-restore"></i></span></li>
    `
   
ulList1.innerHTML +=myLiEx1;
  /*
   var li = document.createElement("li");
   var span = document.createElement("span");
   span.style.color= "green";
   span.style.float = "right";
   li.innerHTML = x3;
span.innerHTML = "12/09/2019";

   li.appendChild(span);
  
  
  document.getElementById("ulList1").appendChild(li);
    */

      
})

var numero = 1;
// Substract Money
Expense_Add.addEventListener("click", function(){
    alertF.style.display = "none";
    var y1 = expense_Screen.textContent;
    var y2 = parseInt(y1);  //expense final 
  var y3 = parseInt(Expense.value);//input value
  var y4 = parseInt(balance_Screen.textContent);



  if( y4<y3 ){
    alertF.style.display = "block";
    alertF.innerHTML = " Oups..You don't have anougth budget!";
    }else{

        var ulList = document.getElementById("ulHistorik");
        var myLiEx = `
        <li><span id="dew" style="color:red"><i class="fas fa-minus-square"></i></span><span style="color: red;">${Expense.value}</span> <span>02/04/2009</span><span onClick="expense_Screen.innerHTML = parseInt(expense_Screen.textContent) - parseInt(this.parentElement.children[1].textContent);this.parentElement.remove();balance_Screen.innerHTML = parseInt(balance_Screen.textContent) + parseInt(this.parentElement.children[1].textContent)"  style="color:rgb(154, 31, 150)"> <i class="fas fa-trash-restore"></i></span></li>
        `
       
ulList.innerHTML +=myLiEx;
expense_Screen.innerHTML =  y2 + y3;
    
balance_Screen.innerHTML =   y4 - y3;
Expense_Add.value = "";

   /*var li = document.createElement("li");
   var span = document.createElement("span");
   span.style.color= "red";

   
    expense_Screen.innerHTML =  y2 + y3;
    
    balance_Screen.innerHTML =   y4 - y3;
   Expense_Add.value = "";

   //span.style.float = "right";
   var spanExpense = document.createElement("span");
   spanExpense.innerHTML += Expense_T.value;
   li.appendChild(spanExpense)
span.innerHTML = y3;


   li.appendChild(span);
   li.innerHTML += delt;
  
   ul.appendChild(li);
  document.getElementById("ulList2").appendChild(ul);*/

  }
  Expense.value = "";
  Expense_T.value = "";

})

//delete or remove an added expense

 

// Partie De Contact
var openContact = document.getElementById("Opencontact");
openContact.addEventListener("click",function(){
    leTittre.innerHTML = " My Contacts"
    alertF.style.display = "none";
    
    document.getElementById("cnt").style.display = "block";
    document.getElementById("cnt").classList.add("fadeIn")
    document.getElementById("tDoList").style.display = "none";
    document.getElementById("MnyM").style.display = "none";
    document.getElementById("blockNt").style.display = "none";
    document.getElementById("parameters").style.display = "none";

});

//Partie contact form 
var isim = document.getElementById("isim");
var telefon = document.getElementById("telefon");
var mailadres = document.getElementById("mailadres");
var website = document.getElementById("website");
var addContact = document.getElementById("btnAddN");
var r = 1;

let Myclass = class {
    constructor(name, numero, mail, siteweb){
        this.name = name;
        this.numero = numero;
        this.mail = mail;
        this.siteweb = siteweb

    }
    addValues(){
        document.getElementById("theName"+r).innerHTML = this.name;
        document.getElementById("theNumber"+r).innerHTML = this.numero;
        document.getElementById("theMail"+r).innerHTML = this.mail;
        document.getElementById("theWeb"+r).innerHTML = this.siteweb;
    }
    }
var linkSite = document.getElementById("theWeb");
    btnAddN.addEventListener("click", function(){
        if(isim.value == '' || telefon.value == "" || mailadres.value == "" ||website.value == "" || 
        website.value.indexOf(".")== -1 || website.value.indexOf("www")== -1 || mailadres.value.indexOf("@")== -1 || 
         mailadres.value.indexOf(".")== -1 ){
          
        
            alertF.style.display = "block";
            
        }else{

          
        alertF.style.display = "none";
        r+=1;
      
        var cntnt =`
           
<div class="bar">
<div class="bar1">
  <i class="fas fa-user"></i>
    <span class="" id="theName${r}">Masaaki</span>
    <span class="" id="theNumber${r}">+90 329 322 33 22</span>
</div>

<div class="bar2">
    <span class="" id="theMail${r}" href='mailto=:${mailadres.value}'>elmasaakiano@gmail.com</span>
   <span  id="theWeb${r}" onClick="window.open('${website.value}')"> www.masaaki.com</span>
    
  <span  style="color:rgb(154, 31, 150);" onClick="this.parentElement.parentElement.remove()"> <i class="far fa-trash-alt"></i></span>
    

</div>
</div>


        `
       let oneLine =  document.getElementById("ulContact");
      
     
       oneLine.innerHTML +=cntnt;
       document.getElementById("ulContact").classList.add("fadeIn")
        let addNow = new Myclass(isim.value, telefon.value, mailadres.value, website.value);
        addNow.addValues()
        isim.value = "";
        telefon.value = "";
        mailadres.value = "";
        website.value = "";}}

        
         
         )
  function  modify(){
      this.parentElement.children[0].textContent
  }

//partie Blocknote
var openNotes = document.getElementById("notesave");
openNotes.addEventListener("click",function(){
    leTittre.innerHTML = " My Notes"
    alertF.style.display = "none";
    
    document.getElementById("cnt").style.display = "none";
    document.getElementById("tDoList").style.display = "none";
    document.getElementById("MnyM").style.display = "none";
    document.getElementById("blockNt").style.display = "block"
    document.getElementById("blockNt").classList.add("fadeIn");
    document.getElementById("parameters").style.display = "none";
});

var addNote = document.getElementById("sNote");
var noteTitle = document.getElementById("ntlt");
var quoteV = document.getElementById("writeNote");
var veiwQuote = document.getElementById("noteVeiw");
var l = 1;
var vt = 1;
addNote.addEventListener("click",function(){
    alertF.style.display = "none";
   
 if(quoteV.value == "" || noteTitle.value == ""){
       alertF.style.display = "block";
    alertF.innerHTML = " Please enter valid information";
}
else{
    vt +=1 ;
     
var domQuote = `
  
<div class="quote" id="">
<div class="btns">
<button class="veiw" id="veiwId" onClick="getElementById('noteVeiw').innerHTML = document.getElementById('laQuote${vt}').textContent">Vew</button>
<button id="clean" class="rmv">Remove</button>
</div>
<p class="" id="lEtITRE${l}">
Note du chef pour batir...
</p>
<p class="laNote fl" id="laQuote${vt}"></p>
</div>
`


    document.getElementById("notesQuoiteArea").innerHTML +=domQuote;

    document.getElementById("lEtITRE"+l).innerHTML = noteTitle.value
    document.getElementById("laQuote"+vt).innerHTML = quoteV.value;
    l+=1;
    quoteV.value = "";
    noteTitle.value = "";
    
}
});


//APP CONSTANTS AND VARS
const KELVIN = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;


fetch(api).then(function(response){
    let data = response.json();
    return data;
}).then(function(data){

});

}

// PARAMETRELER
var parameters = document.getElementById("parametersBtn");
parameters.addEventListener("click",function(){
    leTittre.innerHTML = " Settings";
    alertF.style.display = "none";
    
    document.getElementById("parameters").style.display = "block";
    document.getElementById("parameters").classList.add("fadeIn")
    document.getElementById("tDoList").style.display = "none";
    document.getElementById("MnyM").style.display = "none";
    document.getElementById("blockNt").style.display = "none";
    document.getElementById("cnt").style.display = "none";
});

// DIFFERANTE VARIABLES FOR PARAMETER ELEMENTS
//les buttons
var themeBtn = document.getElementById("paramTheme");
var restoreBtn = document.getElementById("paramRest");
var deleteBtn = document.getElementById("paramDelete");
var updateBtn = document.getElementById("paramChange");

// Rich the processes areas
var themeArea = document.getElementById("themeId");
var restoreArea = document.getElementById("restoreId");
var securityArea = document.getElementById("securityId");
var deleteArea = document.getElementById("deleteId");

//
