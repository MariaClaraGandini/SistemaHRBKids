var quantidade = document.getElementById("quantidade")
var precovenda = document.getElementById("precovenda")
    function InserirModal(){


var divcontainer = document.createElement("div");
      divcontainer.setAttribute('id', '#popup-modal');
      divcontainer.setAttribute('tabindex',"-1")
      divcontainer.classList.add("flex", "modal","h-screen", "justify-center")

  var div1 = document.createElement("div");
  div1.classList.add("relative", "p-4","w-full", "max-w-md", "h-full", "md:h-auto")
 

   

  var div2 = document.createElement("div");
  div2.classList.add("relative","bg-white", "rounded-lg","shadow", "dark:bg-gray-700")

  var buttonclose=document.createElement("button");
  buttonclose.setAttribute('data-modal-toggle', 'popup-modal')
  buttonclose.setAttribute('onclick', 'FecharModal()')

  buttonclose.innerHTML='<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>'
  buttonclose.classList.add("absolute", "top-1", "right-2.5", "text-gray-400", "bg-transparent", "hover:bg-gray-200", "hover:text-gray-900", "rounded-lg", "text-sm","p-1.5", "ml-auto", "inline-flex", "items-center", "dark:hover:bg-gray-600", "dark:hover:text-white")
     
  var spanbutton =document.createElement("span");
  spanbutton.classList.add("sr-only");
  spanbutton.innerHTML="Fechar";

  var tituloproduto = document.createElement("h3");
  tituloproduto.classList.add( "p-1.5","ml-1","text-xl", "font-medium","text-gray-900", "dark:text-white")
  tituloproduto.innerHTML='Editar';

  var seta = document.createElement("svg");
  seta.innerHTML='<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>'

  var formulario = document.createElement("form");
  formulario.classList.add("space-y-6");

  var div3 = document.createElement("div")
  div3.classList.add("flex","flex-wrap");

  var divinput1 = document.createElement("div")
  divinput1.classList.add("mr-2", "ml-2", "mt-4");
  divinput1.id="divinput1"

  var label1 = document.createElement("label")
  label1.classList.add("block","ml-1", "mb-2", "text-sm",  "font-medium", 'text-gray-900', "dark:text-gray-300")
  label1.innerHTML="Quantidade";

  var input1 = document.createElement("input");
  input1.classList.add("bg-gray-50", "erromsg","border", "border-gray-300","text-gray-900","text-sm","rounded-lg", "focus:ring-gray-300", "focus:border-gray-200" ,"block", "w-full", "p-2.5", "dark:bg-gray-600", "dark:border-gray-500", "dark:placeholder-gray-400", "dark:text-white")
  input1.setAttribute('type', 'number');
  input1.setAttribute('min', '1');
  // input1.setAttribute('id', 'quantidade');]
  input1.id="quantidadeupdate";
//  var erromsg = document.createElement("p")
//    erromsg.classList.add("text-red-400", "italic","none")
//    erromsg.innerHTML="Preencha a quantidade!"

  var divinput2 = document.createElement("div")
  divinput2.classList.add( "ml-1", "mt-4");
  divinput2.id="divinput2"

   var label2 = document.createElement("label")
  label2.classList.add("block","ml-2", "mb-2", "text-sm",  "font-medium", 'text-gray-900', "dark:text-gray-300")
  label2.innerHTML="Preço de Venda";


  var input2 = document.createElement("input");
  input2.classList.add("bg-gray-50","input2","border", "border-gray-300","text-gray-900","text-sm","rounded-lg", "focus:ring-gray-300", "focus:border-gray-200" ,"block", "w-full", "p-2.5", "dark:bg-gray-600", "dark:border-gray-500", "dark:placeholder-gray-400", "dark:text-white")
  input2.setAttribute('type', 'text');
  input2.id="precovendaupdate"


  
  var div4 = document.createElement("div");
  div4.classList.add("flex","mt-6", "ml-2","mr-2","flex-wrap","pb-4");




//   var h = document.createElement("h3")
//   h.classList.add("mb-5","text-lg","font-normal", "text-gray-500", "dark:text-gray-400")
//   h.innerHTML="Tem certeza que deseja excluir o produto?"

  // var buttonyes = document.createElement("button");
  //  buttonyes.classList.add("ml-1", "mt-5", "cancelarbotao", "hover:bg-green-200", "mr-4", "mb-2", "p-2.5", "w-full",  "text-gray-900 ","rounded-lg", "border", "border-green-300", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:hover:bg-green-700");
  // buttonyes.setAttribute('data-modal-toggle', 'popup-modal')
  // buttonyes.innerHTML="Cancelar"

  var buttoncancel = document.createElement("button")
  buttoncancel.setAttribute('data-modal-toggle', 'popup-modal')
  buttoncancel.setAttribute('onclick', 'FecharModal()')
  buttoncancel.classList.add("text-gray-500","bg-white", "hover:bg-gray-100","focus:ring-4", "focus:outline-none", "focus:ring-gray-200", "rounded-lg", "border", "border-gray-200", "text-sm", "font-medium","block", "p-2","tamanhobotao","h-11","hover:text-gray-900", "dark:bg-gray-700", "dark:border-gray-500", "dark:hover:text-white", "dark:hover:bg-gray-600","dark:focus:ring-gray-600")
  buttoncancel.innerHTML="Cancelar"

  var buttonsalvar = document.createElement("button")
  buttonsalvar.classList.add("ml-1","cadastrarbotao","text-white","rounded-lg", "border", "text-sm", "font-medium","block", "p-1.75","h-11","tamanhobotao")
  buttonsalvar.innerHTML="Salvar"
  buttonsalvar.setAttribute('onclick', 'validar()');


 //adiciona o nó de texto à nova div criada
 divcontainer.appendChild(div1);

  div1.appendChild(div2);
  div2.appendChild(buttonclose);
  div2.appendChild(tituloproduto);
  // div2.appendChild(seta);
  div2.appendChild(formulario);
 buttonclose.appendChild(spanbutton);
  formulario.appendChild(div3);

  div3.appendChild(divinput1);
  div3.appendChild(divinput2);
  divinput1.appendChild(label1);
  divinput1.appendChild(input1);
  // divinput1.appendChild(erromsg);
  divinput2.appendChild(label2);
  divinput2.appendChild(input2);
  div2.appendChild(div4);
  // div4.appendChild(buttonyes)
  div4.appendChild(buttoncancel);
  div4.appendChild(buttonsalvar)

  


  var quantidade = document.getElementById("quantidade")
var precovenda = document.getElementById("precovenda")



  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("botao");
  document.body.insertBefore(divcontainer, divAtual);

 


    }
    function FecharModal(){
    
      const modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";

      modal.remove();

}
function validarmodal(){
  var quantidadeupdate = document.getElementById("quantidadeupdate").value
  var precovendaupdate = document.getElementById("precovendaupdate").value
  divinput1 = document.querySelector("#divinput1");
  divinput2 = document.querySelector("#divinput2")
// var precovenda = document.getElementById("precovenda")

if(quantidadeupdate<=null){
   var erromsg = document.createElement("p")
  erromsg.classList.add("text-red-400", "italic","text-sm")
  erromsg.innerHTML="Preencha a quantidade!"
  divinput1.appendChild(erromsg);
} 
else{
}
if (precovendaupdate==''){
  var erromsg2= document.createElement("p")
  erromsg2.classList.add("text-red-400", "italic","text-sm")
  erromsg2.innerHTML="Preencha o preço de venda!"
  divinput2.appendChild(erromsg2);
}
else{
}
}

function olamodal(){
  InserirModal()

}
export default function() {InserirModal(), FecharModal(),validarmodal(), olamodal()}// também class, function*
