let prato, bebida, sobremesa;

function selecionarPrato(item) {
    const selecionado = document.querySelector(".prato .selecionado");
    desmarcarAntigo(selecionado);
    prato = item;
    item.classList.add("selecionado");
    const itemCheckMark = item.querySelector(".check-mark");
    itemCheckMark.classList.remove("hidden");
    disponibilizarFinal();
}
function selecionarBebida(item) {
    const selecionado = document.querySelector(".bebida .selecionado");
    desmarcarAntigo(selecionado);
    bebida = item;
    item.classList.add("selecionado");
    const itemCheckMark = item.querySelector(".check-mark");
    itemCheckMark.classList.remove("hidden");
    disponibilizarFinal();
}
function selecionarSobremesa(item) {
    const selecionado = document.querySelector(".sobremesa .selecionado");
    desmarcarAntigo(selecionado);
    sobremesa = item;
    item.classList.add("selecionado");
    const itemCheckMark = item.querySelector(".check-mark");
    itemCheckMark.classList.remove("hidden");
    disponibilizarFinal();
}

function desmarcarAntigo(selecionado){
    if (selecionado !== null){
        selecionado.classList.remove("selecionado");
        const checkMarkAntigo = selecionado.querySelector(".check-mark");
        checkMarkAntigo.classList.add("hidden");
    }
}

function disponibilizarFinal(){
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botao = document.querySelector(".footer button");
        botao.classList.add("final");
        botao.innerHTML = "Fechar pedido";
    }
}