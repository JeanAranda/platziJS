const saludo = function (nombre){
    return `Hola, ${nombre}`
}
//Funcion flecha - explicita
const nuevoSaludo = (nombre) => {
    return `Hola, ${nombre}`
}
//Funcion flecha - implicita
const nuevoSaludoImplicito = nombre => `Hola, ${nombre}`
const nuevoSaludoImplicitoConDosParametros = (nombre, apellido) => `Hola, soy ${nombre} ${apellido}`

//Enlace lexico
const personajeFuncional = {
    nombre: 'Tio Ben',
    mensajeConFuncionTradicional: function (mensaje) {
      console.log(`${this.nombre} dice: ${mensaje}`)
    },
    mensajeConFuncionFlecha: (mensaje) => {
      console.log(`${this.nombre} dice: ${mensaje}`)
    }
  }
  
  personajeFuncional.mensajeConFuncionTradicional('Un gran poder conlleva una gran responsabilidad.')
  personajeFuncional.mensajeConFuncionFlecha('Traigo pizza.')