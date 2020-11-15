 
/*--------------------------------------------------------------------------------------
Genel HTML uzerindeki calisilacak ELEMENTLERIN belirlenmesi
Buradaki degiskenler aciktir ve javascript kodlar boyunca kullanilacaktir
-----------------------------------------------------------------------------------------*/
var TodoTitle = document.getElementById("inp");                   //todolist baslik inputu
var TodoDate = document.getElementById("TdDate");           //todolist tarihi inputu
var Sub = document.getElementById("AddTD");                  //todo eklemek
var innerDom = document.getElementById("oneTd");            //bir uygulama yerlestigi alan
var number = 1;
var ul = document.createElement("ul");               
var alertF = document.getElementById("alertpId");    // Hatali giris ekran mesajin yeri
var leTittre = document.getElementById("leTittre");  // uygulama ismi yerlestigi yer
var tDoL_Btn = document.getElementById("tDoLbtn");  //TODOLIST- butonu
var MnM_Btn =document.getElementById("MnMbtn");      //Money management Butonu

//
    
/*--------------------TODO- LIST APP------------------------------------------------------------------
AddTodo FONKSYONU
->Todo liste bir yapilacak list eklemek icin fonksyon butunudur
->Her tiklandiginda; 
   ->todoTitle verisi kaydolur
   ->TodoDate verisi kaydolur
   ->her todo list eklendiginde yeni bir id ve class olusur
   -> yapilmis ya yapilmamis secenekler mevcut

-----------------------------------------------------------------------------------------*/
function AddTodo(){
       alertF.style.display = "none";
    var dateformat = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    // Match the date format through regular expression
    if(dateformat.test(TodoDate.value) == true && TodoTitle.value != '')
    {
     
innerDom.classList.add("asscl");
   //Burada bir HTML BUTUNUDUR . Her todolist eklenince bu HTML BUTUNU eklenecek ve 
   //degiskenleri degisecek. number +=1 olarak class ve id degisir.    
var TodoContent = `
<div class="oneTdL" id= "lalIste${number}">
<div id="" class="s1 ds1"><span id="numb">${number}</span></div>

  <div  class="ds2 s2"><span class="txt"> ${TodoTitle.value}</span><span id="dateH">2 janvier 2019</span></div>
  <div  id= "doneT${number}" class="ds3 s3 tgt${number}" onclick = "document.getElementById('doneT${number}').style.color = 'green';document.getElementById('nDoneT${number}').style.color = 'black';"> <i class="fas fa-check"></i></div>
  <div  id= "nDoneT${number}" class="ds3a s3a tgf${number}" onclick = "document.getElementById('doneT${number}').style.color = 'black';document.getElementById('nDoneT${number}').style.color = 'red';">  <i class="fas fa-times"></i></div>
  <div  class="ds${number} s4" onClick="this.parentElement.remove()"><i class="fas fa-trash-alt"></i></div>
</div>

`;
innerDom.innerHTML += TodoContent;
TodoTitle.value = "";
TodoDate.value = ""
number +=1;}
else{ 
    alertF.style.display = "block";
    alertF.innerHTML = " Please enter valid information";   
}
}

//bir todo bilgileri doldurduktan sonra kayid icin ADD butuon tiklayinca
tDoL_Btn.addEventListener("click", function(){
    leTittre.innerHTML = " My Todo List"  //baslik
      alertF.style.display = "none";    //hatali mesaj gizlenmesi eger gorunuyorsa
      document.getElementById("MnyM").style.display = "none";  //diger uygulama gizleme
      document.getElementById("blockNt").style.display = "none"; //diger uygulama gizleme
      document.getElementById("cnt").style.display = "none";  //diger uygulama gizleme
    document.getElementById("tDoList").classList.add("fadeIn");  //cSS ANIMASYON eklemek
    document.getElementById("parameters").style.display = "none";  //diger uygulama gizleme
    document.getElementById("tDoList").style.display = "block";  // Todo uygulama gostermek

   

})
                           //#################    TODOLIST APP END    ###########################




 
/*-------------MONEY MANAGEMENT APP-------------------------------------------------------------------------
Burada butje yonetimi uygulamasindaki kullandigim funksyonlar var
->CUZDANA PARA EKLEMEK
->CUZDADAN PARA CEKMEK
->EKLENMIS PARAYI GERI CIKARMAK
->CEKILMIS PARAYI GERI YERINE CEKILMEMIS GIBI KOYMAK



-----------------------------------------------------------------------------------------*/

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


var budget_Add_Value = document.getElementById("b_a_v");  //budje eklemek icin giris ekrani (input)
var budget_add = document.getElementById("b_Add");  //budje girdikten sonra kaydetmek icin basilacak buton

var Expense = document.getElementById("exp_A");  //Bir harcama maliyeti giris inputu 
var Expense_T = document.getElementById("exp_T");  //bir harcama basligi giris inputu (text olarak)
var Expense_Add = document.getElementById("ad_b") // harcama bilgilerden sonra kaydetmek icin basilacak button

var budget_Screen = document.getElementById("budget_Screen");   //budje toplami gosterilecek yer
var expense_Screen = document.getElementById("expense_Screen");  // harcamalar toplami gostericelek yer
var balance_Screen = document.getElementById("balance_Screen");  // mevcut para gosterilecek yer


//Budje eklemek icin buton basilinca calisacak functionlar
budget_add.addEventListener("click", function(){
    alertF.style.display = "none";

   
        var x1 = budget_Screen.textContent;
        var x2 = parseInt(x1);                      //bulunan budjeyi sayiya donusturmek 
        var x3 = parseInt(budget_Add_Value.value);  //para eklediginde veriyi sayi formatina donusturmek
    
        budget_Screen.innerHTML =  x2 + x3;        // girilen budjeyi ,daha once varolan  budjeye eklemek
        var x4 = parseInt(balance_Screen.textContent)  //balance = suanki mevcut budje(eger para cikarilmis ise burdaki deger azalir ama budje azalmaz)
        balance_Screen.innerHTML =   x4 + x3;          //girilen budje balance kismina da + yapilir

    budget_Add_Value.value = "";  //degerleri sifirlamak


/*------------------------------------ Eklenmis Budjelerin GECMISi----------------------------
Yeni bir satir listesi olacak (HTML BUTUNU)
Eklenen degerleri satir listesinde yer alacak
eklenen her budje gecmis olarak kaydedilecek ve istendigi zaman cikarilacak SIL BUTONA BASINCA
->eklenmis para silinince
        ->Budje ve balance degerleri azalacak
        
-----------------------------------------------------------------------------------------*/
  
    var ulList1 = document.getElementById("ulHistorik1");
    var myLiEx1 = `
    <li><span style="color:green" id="dew">
    <i class="fas fa-plus-square"></i></span><span style="color:green;">${x3}</span> <span>02/04/2009</span>
    <span onClick="budget_Screen.innerHTML = parseInt(budget_Screen.textContent) - parseInt(this.parentElement.children[1].textContent);
    this.parentElement.remove();balance_Screen.innerHTML = parseInt(balance_Screen.textContent) - parseInt(this.parentElement.children[1].textContent)" 
    style="color:rgb(154, 31, 150)">
     <i class="fas fa-trash-restore"></i></span></li>
    `
ulList1.innerHTML +=myLiEx1;

      
})


//Harcama eklemek icin buton basilinca calisacak functionlar
var numero = 1;
Expense_Add.addEventListener("click", function(){
    alertF.style.display = "none";
    var y1 = expense_Screen.textContent;
    var y2 = parseInt(y1);  
  var y3 = parseInt(Expense.value);
  var y4 = parseInt(balance_Screen.textContent);


// harcama yapmak icin sartlar-->budje yapilacak harcamadan daha buyuk olmasi lazim
  if( y4<y3 ){
    alertF.style.display = "block";
    alertF.innerHTML = " Oups..You don't have anougth budget!";
    }else{
        //eger her sey tamamsa harcama eklenecektir.
expense_Screen.innerHTML =  y2 + y3; //mevcut harcama toplamina yeni girilmis harcama degeri eklenecek
balance_Screen.innerHTML =   y4 - y3; //mevcut paraya (balance)  yeni girilmis harcama degerine kadar azalacak
Expense_Add.value = "";                // harcama ekleme giris ekrani bos yapmak

//EKLENMIS HARCAMA GECMISI OLUSTURMAK
//HER HARCAMA EKLENINCE BIR HTML BUTUNU OLUSACAK LIST OALRAK. icinde sil funktionu olacak. o funksion bir adim geri cekilecek. yani
//yapilmis bir harcama geri cekmek ve ---> balanceartacak; -->harcama toplami azalacak
        var ulList = document.getElementById("ulHistorik");
        var myLiEx = `
        <li><span id="dew" style="color:red"><i class="fas fa-minus-square"></i></span>
        <span style="color: red;">${Expense.value}</span> <span>${Expense_T.value}</span>
        <span onClick="expense_Screen.innerHTML = parseInt(expense_Screen.textContent) - parseInt(this.parentElement.children[1].textContent);
        this.parentElement.remove();balance_Screen.innerHTML = parseInt(balance_Screen.textContent) +
         parseInt(this.parentElement.children[1].textContent)"  style="color:rgb(154, 31, 150)">
          <i class="fas fa-trash-restore"></i></span></li>
        `    
ulList.innerHTML +=myLiEx;
  }
  Expense.value = "";
  Expense_T.value = "";

})
                      //#################    MANAGE  APP END    ###########################






/* 
Add a contact
-> name 
-> phone number
-> mail adress
-> website link
*/
//KULLANILACAK DEGERLERIN INPUT YERLERI
var isim = document.getElementById("isim"); 
var telefon = document.getElementById("telefon");
var mailadres = document.getElementById("mailadres");
var website = document.getElementById("website");
//Contact ekleme butonu
var addContact = document.getElementById("btnAddN");
var r = 1;

//menuden contact sayfasi acmak
var openContact = document.getElementById("Opencontact");
openContact.addEventListener("click",function(){
    leTittre.innerHTML = " My Contacts"   // sayfaya baslik eklemek
    alertF.style.display = "none";     //HATALI MESAJI gizlemek eger acik ise
    document.getElementById("cnt").style.display = "block"; //Contact Sayfasi Ac
    document.getElementById("cnt").classList.add("fadeIn"); //CSS aNIMATYON EKLE
    document.getElementById("tDoList").style.display = "none"; //diger sayfalar kapatmak eger acik ise
    document.getElementById("MnyM").style.display = "none";   //diger sayfalar kapatmak eger acik ise
    document.getElementById("blockNt").style.display = "none"; //diger sayfalar kapatmak eger acik ise
    document.getElementById("parameters").style.display = "none"; //diger sayfalar kapatmak eger acik ise

});

//Bir calss olusturdum her contact eklemek istenince  isim numara mail ve websitesi 
//


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
     //inputlari doldurduktan sonra bir contact ekleME FONKSYONU                                    ************************

    btnAddN.addEventListener("click", function(){

    //sartlar
        if(isim.value == '' || telefon.value == "" || mailadres.value == "" ||website.value == "" || 
        website.value.indexOf(".")== -1 || website.value.indexOf("www")== -1 || mailadres.value.indexOf("@")== -1 || 
         mailadres.value.indexOf(".")== -1 ){

 alertF.style.display = "block";
            
        }else{
   //sartlar tamam ozaman contacti           
        alertF.style.display = "none";
        r+=1;
      


        //her contact icin html formu/ ICINDE SILMEK ICIN BIR FUNKTION ONCLICK..
        var cntnt =`
           
<div class="bar">
<div class="bar1">
  <i class="fas fa-user"></i>
    <span class="" id="theName${r}">Masaaki</span>
    <span class="" id="theNumber${r}">+90 329 322 33 22</span>
</div>

<div class="bar2">
    <span class="" id="theMail${r}">elmasaakiano@gmail.com</span>
   <span  id="theWeb${r}"> www.masaaki.com</span>
                                                 
  <span  style="color:rgb(154, 31, 150);" onClick="this.parentElement.parentElement.remove()"> <i class="far fa-trash-alt"></i></span>
    

</div>
</div>


        `
       let oneLine =  document.getElementById("ulContact");
      
     
       oneLine.innerHTML +=cntnt;
       document.getElementById("ulContact").classList.add("fadeIn")

       //yeni class olusturuyorum myClass metodu ile. degerler ise yeni girilen bilgiler ile islem yapilacak
        let addNow = new Myclass(isim.value, telefon.value, mailadres.value, website.value);

      //class icindeki metodu kullanarak yeni girilmis degerleri html icinde yazdiriyorum. her seferinde yeni olusan id sayesinde verileri  
      //id'ye ait ekrana yerlestiriyorum
        addNow.addValues()

        //verileri silinmesi
        isim.value = "";
        telefon.value = "";
        mailadres.value = "";
        website.value = "";}}

        
         
         )
  function  modify(){
      this.parentElement.children[0].textContent
  }
                      //#################    CONTACT LIST APP END    ###########################




/*
Note Kaydetmek Bolumu
Burada bir giris ekrani olusturdum (note icerigi icin)
bir input olusturdum (note basligi icin)
her not eklendiginde yeni bir note olacak notlar kisminda ve asil not yazisi eklenecek olan not html icinde gizlenmis bir paragraf
icinde yer alicak.
notu goster butona tiklaninca p icindeki deger screen ekrana gelecek

*/
var openNotes = document.getElementById("notesave");  //buyuk menude not sayfasi acmak butonu 
openNotes.addEventListener("click",function(){   //buton tikalmak (note sayfasi acmak)
    leTittre.innerHTML = " My Notes"     //baslik
    alertF.style.display = "none";     //hatali mesaji gizlemek eger acik ise
    
    document.getElementById("cnt").style.display = "none";     //diger sayfalar kapatmak eger acik ise
    document.getElementById("tDoList").style.display = "none";   //diger sayfalar kapatmak eger acik ise
    document.getElementById("MnyM").style.display = "none";     //diger sayfalar kapatmak eger acik ise
    document.getElementById("blockNt").style.display = "block"   //Note sayfasini gosyermek
    document.getElementById("blockNt").classList.add("fadeIn"); //css animasyonu eklemek
    document.getElementById("parameters").style.display = "none";    //diger sayfalar kapatmak eger acik ise
});

var addNote = document.getElementById("sNote");   //veriler girdikten sonra notu kaydetmek icin basilacak buton
var noteTitle = document.getElementById("ntlt");   //note icin girilmis baslik
var quoteV = document.getElementById("writeNote");  //note icin girilmis note yazisal degeri (note asli)
var veiwQuote = document.getElementById("noteVeiw");  //note gormek isteyince gorunecek ekran yeri
var l = 1;
var vt = 1;

//VERILER GIRILDIKTEN SONRA NOTE- EKLE BUTONA TIKLANINCA CALISACAK FUNKTION                   **************************
addNote.addEventListener("click",function(){
    alertF.style.display = "none";
   //SARTLAR
 if(quoteV.value == "" || noteTitle.value == ""){
       alertF.style.display = "block";
    alertF.innerHTML = " Please enter valid information";
}
else{
    vt +=1 ;
     
    //note html 
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

        //html ve icinde girilmis degerlerle kaydedilmis notlar listesine eklemek
    document.getElementById("notesQuoiteArea").innerHTML +=domQuote;

    document.getElementById("lEtITRE"+l).innerHTML = noteTitle.value //yeni eklenecek not listesi uzerinde girilmis basligi yazmak
    document.getElementById("laQuote"+vt).innerHTML = quoteV.value; //gizli olan paragrafa note yazisal degeri yerlestirmek
    l+=1;
    quoteV.value = "";
    noteTitle.value = "";
    
}
});
                         //#################  NOTES LIST APP END    ###########################






// PARAMETRELER
document.getElementById('parameters').style.display = "none";
var parameters = document.getElementById("parametersBtn");

parameters.addEventListener("click",function(){
    document.getElementById('parameters').style.display = "block";//PARAMETRE SAYFASI GOSTERMEK
    leTittre.innerHTML = " Settings";
    alertF.style.display = "none";

   //parametre sayfasini gostermek ve diger sayfalari (note todolist vb) kapatmak
    document.getElementById("parameters").style.display = "block";
    document.getElementById("parameters").classList.add("fadeIn")
    document.getElementById("tDoList").style.display = "none";
    document.getElementById("MnyM").style.display = "none";
    document.getElementById("blockNt").style.display = "none";
    document.getElementById("cnt").style.display = "none";

    //parametreler icinde toplam 4 sayfa var ve otomatik olarak hepsi gorunuyor
    restoreArea.style.display = "none";  //parametreler icinde diger parametre sayfalari gizlemek
    securityArea.style.display = "none"; //parametreler icinde diger parametre sayfalari gizlemek
    deleteArea.style.display = "none";  //parametreler icinde diger parametre sayfalari gizlemek

});

// DIFFERANTE VARIABLES FOR PARAMETER ELEMENTS
//parametre sayfasi icndeki 4 element sayfalarin butonlari
var themeBtn = document.getElementById("restoreAreaId");
var restoreBtn = document.getElementById("paramRestId");
var updateBtn = document.getElementById("paramDeleteId");
var deleteBtn = document.getElementById("paramChangeId");

//parametre sayfasi icndeki 4 element sayfalarin html alanlari 
var themeArea = document.getElementById("themeId");
var restoreArea = document.getElementById("restoreId");
var securityArea = document.getElementById("securityId");
var deleteArea = document.getElementById("deleteId");

//parametrelar icinde tema ayarlar sayfasini acmak icin diger parametre icindeki parametre sayfalari kapatmak
themeBtn.addEventListener("click",function(){
   // leTittre.innerHTML = " Settings";
    alertF.style.display = "none";
    
    themeArea.style.display = "block";
    themeArea.classList.add("fadeInB")
    restoreArea.style.display = "none";
    securityArea.style.display = "none";
    deleteArea.style.display = "none";
});
//bilgilari sifirla
restoreBtn.addEventListener("click",function(){
    // leTittre.innerHTML = " Settings";
     alertF.style.display = "none";
     
     restoreArea.style.display = "block";
     restoreArea.classList.add("fadeInB");
     themeArea.style.display = "none";
     securityArea.style.display = "none";
     deleteArea.style.display = "none";
 });

 //hesani sil
 deleteBtn.addEventListener("click",function(){
    // leTittre.innerHTML = " Settings";
     alertF.style.display = "none";
     
     deleteArea.style.display = "block";
     deleteArea.classList.add("fadeInB");
     themeArea.style.display = "none";
     securityArea.style.display = "none";
     restoreArea.style.display = "none";
 });

 //sifre bilgileri guncelemek
 updateBtn.addEventListener("click",function(){
    // leTittre.innerHTML = " Settings";
     alertF.style.display = "none";
     
     securityArea.style.display = "block";
     securityArea.classList.add("fadeInB");
     themeArea.style.display = "none";
     restoreArea.style.display = "none";
     deleteArea.style.display = "none";
 });

 //Menu Toggle Button
 var menuFull = document.getElementById("menu-toogle");
 var menuBtn = document.getElementById("toggleMenuBtn");
 menuBtn.addEventListener("click",function(){
     menuFull.classList.toggle("menuToggle");
     menuFull.classList.add('fadeIn')
 }) 



 // Weather App
 let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon")
let tempValue = document.getElementById("temp-value");
let tempUnit = document.getElementById("temp-unit");
let climate = document.getElementById("climate");
let iconFile; 
cityName = document.getElementById("cNm");


sbmt.addEventListener("click", () => {
let long;
let lat;
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((position) => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    const proxy ="https://cors-anywhere.herokuapp.com/";
    const api = `
    ${proxy}api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=9afd12c2e4b2208e8c6b99df137c1d9a`;
  

    fetch(api)
    .then((response) =>{
       return response.json();
    })
    .then((data) =>{
      
      const {name} = data;
      const {feels_like} = data.main;
      const {id, main} = data.weather[0];
      loc.textContent = name;
      climate.textContent = main;
      tempValue.textContent = Math.round(feels_like - 273);
      document.getElementById("temp-unit").style.display = "inline-block"
      if (id<250){
        tempIcon.src = './icon/storm.svg' ;
      }
      else if (id<350){
        tempIcon.src = './icon/drizzle.svg' ;
      }
      else if (id<550){
        tempIcon.src = './icon/rain.svg' ;
      }
      else if (id<650){
        tempIcon.src = './icon/snow.svg' ;
      }
      else if (id<800){
        tempIcon.src = './icon/atmosphere.svg' ;
      }
      else if (id===800){
        tempIcon.src = './icon/sun.svg' ;
      }
      else if(id>800){
        tempIcon.src = './icon/clouds.svg' ;
      }
      console.log(data);
      
    })
  })
}
});
