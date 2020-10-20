// Debut de TodoList
//Declaration Des Variablesva
var TodoTitle = document.getElementById("inp");
var TodoDate = document.getElementById("TdDate");
var Sub = document.getElementById("AddTD");
var innerDom = document.getElementById("oneTd");
var number = 1;



//
        


function AddTodo(){

        
            var TodoContent = `
            <div class="oneTdL">
            <div id="s1" class="ds1"><span id="numb">${number}</span></div>
              <div id="s2" class="ds2"><span class="txt"> ${TodoTitle.value}</span></div>
              <div id="s3" class="ds3"><i class="fas fa-check"></i></div>
              <div id="s3a" class="ds3a"><i class="fas fa-times"></i></div>
              <div id="s4" class="ds4"><i class="fas fa-trash-alt"></i></div>
            
            </div>
            `;
            innerDom.innerHTML += TodoContent;
    
       

}










//Fin de Todo List