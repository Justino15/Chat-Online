let input = document.getElementById('inputtarefa');
let add = document.getElementById('add');
let main = document.getElementById('arealista');
let contador=0;

//Adicionar tarefas
function addtarefa(){
    //Pegar o valor digitado no input
    let valorinput = input.value;

    //Se não for vazio, nem nulo nem indefinido
    if((valorinput !=="") && (valorinput!==null) && (valorinput !==undefined)){
        ++contador;
        let novoitem = ` <div id="${contador}" class="item">

        <div onclic="marcartarefa(${contador});" class="item-icone">
        <input id="icone_${contador}"  class="checkbox" type="checkbox" onclick="marcartarefa(${contador});"></div>

        <div class="item-nome">${valorinput}</div>

        <div class="item-botao"><button class="deletar" onclick="deletar(${contador});">deletar</button>
            
        </div> 

    </div>`
    
    //Adicionar novo item no Main 
    main.innerHTML +=novoitem;
    
   //Zerar os campos
   input.value="";
   input.focus();
    

    }
}

//Marcar Tarefa adicionada
    function marcartarefa(id){
       var item = document.getElementById(id);
       var classe = item.getAttribute('class');
       console.log(classe); 

        if(classe == "item"){
            item.classList.add("clicado"); 
            

            //Mover item para baixo
            item.parentNode.appendChild(item);
            
        }else{
            item.classList.remove("clicado");
        }
        // document.body.style.backgroundColor='gray';
        
    }     

   

 //Deletar Tarefas adicionada
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

//Confirmar com ENTER
input.addEventListener("keyup", function(event){
    //Se teclou ENTER(13)
    if(event.keyCode===13){
        event.preventDefault();
        add.click();
   }
    
    
})