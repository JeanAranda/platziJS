// Tipo enteri y decimal no hay distincion en JS
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// Notacion  cientifica
const cientifico = 5e3

// Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritmeticas
// Suma - Resta - Multiplicacion y Division
const suma = 3+4
const resta = 4-4
const multiplicacion = 5*5
const division = 5/1

//Modulo y exponenciacion
const modulo = 15%8
const exponenciacion = 2**3

//Precision
const resultado = 0.1+0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 3)

//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
