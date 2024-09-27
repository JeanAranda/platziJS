const numeroSecreto = Math.floor(Math.random() * 10 +1) 
const numeroJugador = parseInt(prompt("Adivina el numero secreto entre el 1 al 10"))

console.log(`Este es el numero que esta en juego ${numeroJugador}`)
console.log(`El numero secreto es: ${numeroSecreto}`)
if (numeroJugador === numeroSecreto){
    console.log("Felicidades adivinaste el numero secreto!!!!")
}else if (numeroJugador > numeroSecreto){
    console.log("El numero secreto es menor")
}else{
    console.log("El numero secreto es mayor")
}