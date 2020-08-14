alert('Parei no módulo 2, vídeo 6');


/* // Aula 1 - Variáveis
var nome = "Glenio";
var idade = 32;
var salvo = true;
var cidade;  // undefined

var tipo = typeof nome;

console.log(nome);
console.log(idade);
console.log(salvo);
console.log(cidade);
console.log(tipo); */

//--##############################################################

/* // Aula 2 - getElementById innerHTML
// Obs: Para alterar o valor de uma tag, usar o innerHTML, 
// para alterar o valor de um campo, usar o value 
document.getElementById("titulo").innerHTML = "Olá Glenio & Fabiana, seja bem vindo!"

var titulo = document.getElementById("titulo");
titulo.innerHTML = "Segundo Título";

var campo = document.getElementById("campo");
campo.value = "Glenio Juste"; */


/* // Aula 3 - Funções 1
function alterar(){
    document.getElementById("titulo").innerHTML = "Título da function";
    document.getElementById("campo").value = "Campo da function";
}

alterar(); */

//--##############################################################

/* // Aula 4 - Funções 2 (parâmetro)
function alterar(titulo){
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

// Comentado por causa da function somar()
// alterar("Título com parâmetro!");  


function somar(x, y){
    let total = x + y;

    document.getElementById("campo").value = total;
}

// Comentado por causa da function somarComReturn()
// somar(4, 4);

function somarComReturn(x, y){
    let total = x + y;

    return total;
}

var resultado = somarComReturn(100, 7);
document.getElementById("campo").value = resultado; */

//--##############################################################





