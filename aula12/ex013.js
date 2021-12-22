/* Paar pegar a hora, o dia, o ano, ... no momento atual basta utilizar esse método
var agora = new Date()
var hora = agora.getHours ou agora.getDay ou agora.getYears ... e por aí vai  

*/
var agora = new Date()
var hora = agora.getTime()

if (hora >= 0 && hora < 5){
    console.log(`Agora são exatamente ${hora} horas da manhã.`)
    console.log(`Boa Madrugada!`)
} else if (hora < 12){
    console.log(`Agora são exatamente ${hora} horas da manhã.`)
    console.log(`Bom Dia!`)
} else if (hora <= 18) {
    console.log(`Agora são exatamente ${hora} horas da tarde.`)
    console.log(`Boa Tarde!`)
} else {
    console.log(`Agora são exatamente ${hora} horas da noite.`)
    console.log(`Boa Noite!`)
}
