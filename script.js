// Debut de TodoList
//Declaration Des Variablesva
var TodoTitle = document.getElementById("inp");
var TodoDate = document.getElementById("TdDate");
var Sub = document.getElementById("AddTD");
var innerDom = document.getElementById("oneTd");
var number = 1;
var ul = document.createElement("ul");
var alertF = document.getElementById("alertpId");

//
        


function AddTodo(){
    alertF.style.display = "none";

    var dateformat = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    // Match the date format through regular expression
    if(dateformat.test(TodoDate.value) == true && TodoTitle.value != '')
    {
    
       
innerDom.classList.add("asscl");
       
var TodoContent = `
<div class="oneTdL">
<div id="s1" class="ds1"><span id="numb">${number}</span></div>
  <div id="s2" class="ds2"><span class="txt"> ${TodoTitle.value}</span><span id="dateH">${TodoDate.value}</span></div>
  <div id="s3" class="ds3 ${"tgt"+number}" ><i class="fas fa-check"></i></div>
  <div id="s3a" class="ds3a ${"tgf"+number}"><i class="fas fa-times"></i></div>
  <div id="s4" class="ds4 ${"sil"+number}"><i class="fas fa-trash-alt"></i></div>

</div>
`;
innerDom.innerHTML += TodoContent;
number +=1;

//Utulisons toogle pour cocher et decocher ;es taches faites ou pas

//start
var done1 = document.querySelector(".tgt1");
done1.addEventListener("click", function(){
document.querySelector(".tgt1").style.color = "green";
document.querySelector(".tgf1").style.color = "black"


})

var notDone1 = document.querySelector(".tgf1");
notDone1.addEventListener("click", function(){
document.querySelector(".tgf1").style.color = "red";
document.querySelector(".tgt1").style.color = "black"


})
//End
//start
var done2 = document.querySelector(".tgt2");
done2.addEventListener("click", function(){
document.querySelector(".tgt2").style.color = "green";
document.querySelector(".tgf2").style.color = "black"


})

var notDone2 = document.querySelector(".tgf2");
notDone2.addEventListener("click", function(){
document.querySelector(".tgf2").style.color = "red";
document.querySelector(".tgt2").style.color = "black"


})
//End
//start
var done3 = document.querySelector(".tgt3");
done3.addEventListener("click", function(){
document.querySelector(".tgt3").style.color = "green";
document.querySelector(".tgf3").style.color = "black"


})

var notDone3 = document.querySelector(".tgf3");
notDone3.addEventListener("click", function(){
document.querySelector(".tgf3").style.color = "red";
document.querySelector(".tgt3").style.color = "black"


})
//End
//start
var done4 = document.querySelector(".tgt4");
done4.addEventListener("click", function(){
document.querySelector(".tgt4").style.color = "green";
document.querySelector(".tgf4").style.color = "black"


})

var notDone4 = document.querySelector(".tgf4");
notDone4.addEventListener("click", function(){
document.querySelector(".tgf4").style.color = "red";
document.querySelector(".tgt4").style.color = "black"


})
//End
//start
var done5 = document.querySelector(".tgt5");
done5.addEventListener("click", function(){
document.querySelector(".tgt5").style.color = "green";
document.querySelector(".tgf5").style.color = "black"


})

var notDone5 = document.querySelector(".tgf5");
notDone5.addEventListener("click", function(){
document.querySelector(".tgf5").style.color = "red";
document.querySelector(".tgt5").style.color = "black"


})
//End
//start
var done6 = document.querySelector(".tgt6");
done6.addEventListener("click", function(){
document.querySelector(".tgt6").style.color = "green";
document.querySelector(".tgf6").style.color = "black"


})

var notDone6 = document.querySelector(".tgf6");
notDone6.addEventListener("click", function(){
document.querySelector(".tgf6").style.color = "red";
document.querySelector(".tgt6").style.color = "black"


})
//End
//start
var done7 = document.querySelector(".tgt7");
done7.addEventListener("click", function(){
document.querySelector(".tgt7").style.color = "green";
document.querySelector(".tgf7").style.color = "black"


})

var notDone7 = document.querySelector(".tgf7");
notDone7.addEventListener("click", function(){
document.querySelector(".tgf7").style.color = "red";
document.querySelector(".tgt7").style.color = "black"


})
//End
//start
var done8 = document.querySelector(".tgt8");
done8.addEventListener("click", function(){
document.querySelector(".tgt8").style.color = "green";
document.querySelector(".tgf8").style.color = "black"


})

var notDone8 = document.querySelector(".tgf8");
notDone8.addEventListener("click", function(){
document.querySelector(".tgf8").style.color = "red";
document.querySelector(".tgt8").style.color = "black"


})
//End
//start
var done9 = document.querySelector(".tgt9");
done9.addEventListener("click", function(){
document.querySelector(".tgt9").style.color = "green";
document.querySelector(".tgf9").style.color = "black"


})

var notDone9 = document.querySelector(".tgf9");
notDone9.addEventListener("click", function(){
document.querySelector(".tgf9").style.color = "red";
document.querySelector(".tgt9").style.color = "black"


})
//End
//start
var done10 = document.querySelector(".tgt10");
done10.addEventListener("click", function(){
document.querySelector(".tgt10").style.color = "green";
document.querySelector(".tgf10").style.color = "black"


})

var notDone10 = document.querySelector(".tgf10");
notDone10.addEventListener("click", function(){
document.querySelector(".tgf10").style.color = "red";
document.querySelector(".tgt10").style.color = "black"


})
//End
//start
var done11 = document.querySelector(".tgt11");
done11.addEventListener("click", function(){
document.querySelector(".tgt11").style.color = "green";
document.querySelector(".tgf11").style.color = "black"


})

var notDone11 = document.querySelector(".tgf11");
notDone11.addEventListener("click", function(){
document.querySelector(".tgf11").style.color = "red";
document.querySelector(".tgt11").style.color = "black"


})
//End
//start
var done12 = document.querySelector(".tgt12");
done12.addEventListener("click", function(){
document.querySelector(".tgt12").style.color = "green";
document.querySelector(".tgf12").style.color = "black"


})

var notDone12 = document.querySelector(".tgf12");
notDone12.addEventListener("click", function(){
document.querySelector(".tgf12").style.color = "red";
document.querySelector(".tgt12").style.color = "black"


})
//End
//start
var done13 = document.querySelector(".tgt13");
done13.addEventListener("click", function(){
document.querySelector(".tgt13").style.color = "green";
document.querySelector(".tgf13").style.color = "black"


})

var notDone13 = document.querySelector(".tgf13");
notDone13.addEventListener("click", function(){
document.querySelector(".tgf13").style.color = "red";
document.querySelector(".tgt13").style.color = "black"


})
//End
//start
var done14 = document.querySelector(".tgt14");
done14.addEventListener("click", function(){
document.querySelector(".tgt14").style.color = "green";
document.querySelector(".tgf14").style.color = "black"


})

var notDone14 = document.querySelector(".tgf14");
notDone14.addEventListener("click", function(){
document.querySelector(".tgf14").style.color = "red";
document.querySelector(".tgt14").style.color = "black"


})
//End
//start
var done15 = document.querySelector(".tgt15");
done15.addEventListener("click", function(){
document.querySelector(".tgt15").style.color = "green";
document.querySelector(".tgf15").style.color = "black"


})

var notDone15 = document.querySelector(".tgf15");
notDone15.addEventListener("click", function(){
document.querySelector(".tgf15").style.color = "red";
document.querySelector(".tgt15").style.color = "black"


});
var delete1 = document.querySelector(".sil1");
delete1.addEventListener("click", function(){
var delete11 =  delete1.parentElement
delete11.style.backgroundColor = 'black';
alert(this.parentElement)
})
//End


}


//CLICK FOR DELETE AND SELECT





//Fin de Todo List
else{ 
    alertF.style.display = "block";
    alertF.innerHTML = " Please enter valid information";
   
    
}

}


//Manage App
var tDoL_Btn = document.getElementById("tDoLbtn");
var MnM_Btn =document.getElementById("MnMbtn");


tDoL_Btn.addEventListener("click", function(){
      alertF.style.display = "none";
      document.getElementById("MnyM").style.display = "none";
      document.getElementById("blockNt").style.display = "none";
      document.getElementById("cnt").style.display = "none";
    document.getElementById("tDoList").style.display = "block";
    document.getElementById("tDoList").classList.add("fadeIn");
   

})

MnM_Btn.addEventListener("click", function(){
    alertF.style.display = "none";
    document.getElementById("tDoList").style.display = "none";
    document.getElementById("MnyM").style.display = "block";
    
    document.getElementById("MnyM").classList.add("fadeIn")
    document.getElementById("MnyM").style.marginTop = "10px";
    document.getElementById("cnt").style.display = "none";
    document.getElementById("blockNt").style.display = "none";

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
  
  
   var li = document.createElement("li");
   var span = document.createElement("span");
   span.style.color= "green";
   span.style.float = "right";
   li.innerHTML = x3;
span.innerHTML = "12/09/2019";

   li.appendChild(span);
  
  
  document.getElementById("ulList1").appendChild(li);
    

      
})


// Substract Money
Expense_Add.addEventListener("click", function(){
    alertF.style.display = "none";
    var y1 = expense_Screen.textContent;
    var y2 = parseInt(y1);  //expense final 
  var y3 = parseInt(Expense.value);//input value
  var y4 = parseInt(balance_Screen.textContent);
 
  let yT = y3 + y2;
  if( y4<y3 ){
    alertF.style.display = "block";
    alertF.innerHTML = " Oups..You don't have anougth budget!";
    }else{
    expense_Screen.innerHTML =  y2 + y3;
    
    balance_Screen.innerHTML =   y4 - y3;
   Expense_Add.value = "";

   var li = document.createElement("li");
   var span = document.createElement("span");
   span.style.color= "red";
   span.style.float = "right";
   li.innerHTML = Expense_T.value;
span.innerHTML = y3;

   li.appendChild(span);
  
   ul.appendChild(li);
  document.getElementById("ulList2").appendChild(ul);
  document.getElementById("ulList2").classList.add("fadeIn")
  }

})

// Partie De Contact
var openContact = document.getElementById("Opencontact");
openContact.addEventListener("click",function(){
    alertF.style.display = "none";
    
    document.getElementById("cnt").style.display = "block";
    document.getElementById("cnt").classList.add("fadeIn")
    document.getElementById("tDoList").style.display = "none";
    document.getElementById("MnyM").style.display = "none";
    document.getElementById("blockNt").style.display = "none";
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
var linkSite = document.getElementById("theWeb").value;

    btnAddN.addEventListener("click", function(){
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
    <span class="" id="theMail${r}">elmasaakiano@gmail.com</span>
    <span class="" id="theWeb${r}"> www.masaaki.com</span>
    <i class="far fa-trash-alt"></i>
    

</div>
</div>


        `
       let oneLine =  document.getElementById("ulContact");
      
     
       oneLine.innerHTML +=cntnt;
       document.getElementById("ulContact").classList.add("fadeIn")
        let addNow = new Myclass(isim.value, telefon.value, mailadres.value, website.value)
        addNow.addValues();
    })


//partie Blocknote
var openNotes = document.getElementById("notesave");
openNotes.addEventListener("click",function(){

    alertF.style.display = "none";
    
    document.getElementById("cnt").style.display = "none";
    document.getElementById("tDoList").style.display = "none";
    document.getElementById("MnyM").style.display = "none";
    document.getElementById("blockNt").style.display = "block"
    document.getElementById("blockNt").classList.add("fadeIn");
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