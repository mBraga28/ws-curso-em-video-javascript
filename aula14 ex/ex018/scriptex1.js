function calcularTabuada() {
    let numero = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (numero.value.length  == 0) {
       window.alert('Digite um número por favor!')
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            
            let item = document.createElement('option')
            let x = n*c
            item.text = `${n} x ${c} = ${x}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}