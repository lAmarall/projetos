function calcular(){
    var nome = document.getElementById('txtnome1')
    var minutos = document.getElementById('numatraso')
    var valor = document.getElementById('numvalor')
    var pessoas = document.getElementById('numpessoas')
    var res = document.querySelector('div#res')
    var out = document.querySelector('div#out')
    var fin = document.querySelector('div#fin')
    var tempojogo = document.getElementsByName('tempojogo')
    var minutagem = Number('')
    if (tempojogo[0].checked){
        minutagem = 60
    } else if (tempojogo[1].checked){
        minutagem = 90
    } else if (tempojogo[2].checked){
        minutagem = 120
    } else {
        alert('Necessário selecionar o tempo do jogo')
    }
    var nome1 = String(nome.value)
    var minutos1 = Number(minutos.value)
    var valor1 = Number(valor.value)
    var pessoas1 = Number(pessoas.value)
    var minutosjogo = minutagem
    if (minutos1 > 60){
        alert('ERRO - O VALOR DE MINUTOS DEVE SER INFERIOR A 60')
    } else {
        var quadrapessoa = valor1/pessoas1
        var atraso = (quadrapessoa/minutosjogo) * minutos1
        var desconto = quadrapessoa - (atraso/(pessoas1-1))
        var total = quadrapessoa + atraso
        var pagoaquadra = desconto * (pessoas1 - 1) + total 
        //var arredondamento = (((pessoas-1) * desconto) + total)
            /*if (pagoaquadra =! valor1){
            var arredondamento = valor + (valor1 - pagoaquadra)
            pagoaquadra = desconto * (pessoas1 - 1) + arredondamento
            res.innerHTML = `O ${nome1}, se atrasou ${minutos1} minutos, e terá que pagar ${atraso.toFixed(2)} à mais. Totalizando a parte dele em ${arredondamento.toFixed(2)}`
            fin.innerHTML = `O valor pago a quadra foi de ${pagoaquadra.toFixed(2)}`
    } */
        res.innerHTML = `O ${nome1}, se atrasou ${minutos1} minutos, e terá que pagar ${atraso.toFixed(2)} à mais. Totalizando a parte dele em ${total.toFixed(2)}`
        out.innerHTML = `Sendo assim, os outros participantes terão que pagar ${desconto.toFixed(2)} `
        fin.innerHTML = `O valor pago a quadra foi de ${pagoaquadra.toFixed(2)}`
        //pagoaquadra.toFixed(2)
    }
}   