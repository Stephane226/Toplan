// Debut de TodoList
//Declaration Des Variablesva
var TodoTitle = document.getElementById("inp");
var TodoDate = document.getElementById("TdDate");
var Sub = document.getElementById("AddTD");
var innerDom = document.getElementById("oneTd");
var number = 1;



//
        


function AddTodo(){
    if(TodoTitle.value == '' || TodoDate.value == ""){
    alert("no")
    }else{

        
            var TodoContent = `
            <div class="oneTdL">
            <div id="s1" class="ds1"><span id="numb">${number}</span></div>
              <div id="s2" class="ds2"><span class="txt"> ${TodoTitle.value}</span><span id="dateH">${TodoDate.value}</span></div>
              <div id="s3" class="ds3 ${"tgt"+number}" ><i class="fas fa-check"></i></div>
              <div id="s3a" class="ds3a ${"tgf"+number}"><i class="fas fa-times"></i></div>
              <div id="s4" class="ds4"><i class="fas fa-trash-alt"></i></div>
            
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
   
  
})
//End


        }
        
}
//CLICK FOR DELETE AND SELECT





//Fin de Todo List