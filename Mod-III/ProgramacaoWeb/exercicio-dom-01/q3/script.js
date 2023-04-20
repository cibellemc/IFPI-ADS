var botao = document.getElementById("botao");
var botao_limpar = document.getElementById("botao-limpar");

botao.addEventListener("click", function() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
});

botao_limpar.addEventListener("click", function(){
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = "";
})