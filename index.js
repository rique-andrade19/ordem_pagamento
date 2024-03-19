function somar() {
    var serv_terc = document.getElementById('serv_terc').value;

    var valorPecas = document.getElementById('valor_pecas').value;

    var maoDeObra = document.getElementById('mao_obra').value;

    var total = parseFloat(serv_terc) + parseFloat(valorPecas) + parseFloat(maoDeObra)

    document.getElementById('total').innerHTML= `R$ ${total.toFixed(2)}`
};