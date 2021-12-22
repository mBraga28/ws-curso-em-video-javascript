// RECURSIVIDADE
function fatorial(m) {
    if (m == 1) {
        return 1
    } else {
        return m * fatorial(m-1)
    }
}

console.log(fatorial(5))