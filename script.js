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
            var done1 = document.querySelector(".tgt1");
done1.addEventListener("click", function(){
    done1.classList.toggle("green");
    document.querySelector(".tgf1").style.color = "black"
   
  
})

var done2 = document.querySelector(".tgt2");
done2.addEventListener("click", function(){
    done2.classList.toggle("green");
    document.querySelector(".tgf2").style.color = "black"
   
  
})

var done3 = document.querySelector(".tgt3");
done3.addEventListener("click", function(){
    done3.classList.toggle("green");
    document.querySelector(".tgf3").style.color = "black"
   
  
})

var done4 = document.querySelector(".tgt4");
done4.addEventListener("click", function(){
    done4.classList.toggle("green");
    document.querySelector(".tgf4").style.color = "black"
   
  
})
var done5 = document.querySelector(".tgt5");
done5.addEventListener("click", function(){
    done5.classList.toggle("green");
    document.querySelector(".tgf5").style.color = "black"
   
  
})
var done6 = document.querySelector(".tgt6");
done6.addEventListener("click", function(){
    done6.classList.toggle("green");
    document.querySelector(".tgf6").style.color = "black"
   
  
})
var done7 = document.querySelector(".tgt7");
done7.addEventListener("click", function(){
    done7.classList.toggle("green");
    document.querySelector(".tgf7").style.color = "black"
   
  
})
var done8 = document.querySelector(".tgt8");
done8.addEventListener("click", function(){
    done8.classList.toggle("green");
    document.querySelector(".tgf8").style.color = "black"
   
  
})
var done9 = document.querySelector(".tgt9");
done9.addEventListener("click", function(){
    done9.classList.toggle("green");
    document.querySelector(".tgf9").style.color = "black"
   
  
})
var done10 = document.querySelector(".tgt10");
done10.addEventListener("click", function(){
    done10.classList.toggle("green");
    document.querySelector(".tgf10").style.color = "black"
   
  
})
var done11 = document.querySelector(".tgt11");
done11.addEventListener("click", function(){
    done11.classList.toggle("green");
    document.querySelector(".tgf11").style.color = "black"
   
  
})
var done12 = document.querySelector(".tgt12");
done12.addEventListener("click", function(){
    done12.classList.toggle("green");
    document.querySelector(".tgf12").style.color = "black"
   
  
})

var done13 = document.querySelector(".tgt13");
done13.addEventListener("click", function(){
    done13.classList.toggle("green");
    document.querySelector(".tgf13").style.color = "black"
   
  
})
var done14 = document.querySelector(".tgt14");
done14.addEventListener("click", function(){
    done14.classList.toggle("green");
    document.querySelector(".tgf14").style.color = "black"
   
  
})
var done15 = document.querySelector(".tgt15");
done15.addEventListener("click", function(){
    done15.classList.toggle("green");
    document.querySelector(".tgf15").style.color = "black"
   
  
})

        }
        
}
//CLICK FOR DELETE AND SELECT





//Fin de Todo List