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
function desmarcarAntigo(selecionado) {
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        const checkMarkAntigo = selecionado.querySelector(".check-mark");
        checkMarkAntigo.classList.add("hidden");
    }
}
function disponibilizarFinal() {
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        const botao = document.querySelector(".footer button");
        botao.classList.add("final");
        botao.innerHTML = "Fechar pedido";
        botao.disabled = false;
    }
}
function fecharPedido() {
    let pedido = encodeURIComponent(gerarTextoPedido());
    window.location.assign("https://wa.me/5566999732624?text=" + pedido)
}
function gerarTextoPedido() {
    const nomePrato = prato.querySelector("h3").innerHTML;
    const nomeBebida = bebida.querySelector("h3").innerHTML;
    const nomeSobremesa = sobremesa.querySelector("h3").innerHTML;
    const textoPedido = `Olá, gostaria de fazer o *pedido*:
    - *Prato*: ${nomePrato}
    - *Bebida*: ${nomeBebida}
    - *Sobremesa*: ${nomeSobremesa}
    *Total*: R$ *${calcularTotal().toFixed(2)}*`;
    console.log(textoPedido);
    return textoPedido;
}
function calcularTotal(){
    const precoPrato = tratarPreco(prato.querySelector(".price").innerHTML);
    const precoBebida = tratarPreco(bebida.querySelector(".price").innerHTML);
    const precoSobremesa = tratarPreco(sobremesa.querySelector(".price").innerHTML);
    return precoPrato + precoBebida + precoSobremesa;
}
function tratarPreco(textoPrice){
    return Number(textoPrice.replace('R$ ','').replace(',','.'));
}