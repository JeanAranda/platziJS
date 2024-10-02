// Ejemplo 1: Contextos de ejecución y scope chain básicos
let globalVar = "Soy global";

function outerFunction() {
  let outerVar = "Soy outer";
  
  function innerFunction() {
    let innerVar = "Soy inner";
    console.log(innerVar);  // Accede a variable local
    console.log(outerVar);  // Accede a variable del contexto externo
    console.log(globalVar); // Accede a variable global
  }
  
  innerFunction();
}

outerFunction();

// Ejemplo 2: Closures y scope chain
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Ejemplo 3: Hoisting y TDZ (Temporal Dead Zone)
console.log(hoistedVar); // undefined
var hoistedVar = "Soy hoisted";

// console.log(tdz); // ReferenceError
let tdz = "Temporal Dead Zone";

// Ejemplo 4: Scope en bloques (let y const)
{
  let blockVar = "Solo visible en este bloque";
  const BLOCK_CONST = "Constante de bloque";
}
// console.log(blockVar); // ReferenceError

// Ejemplo 5: This y contextos de ejecución
const obj = {
  method: function() {
    console.log(this);
  }
};

obj.method(); // 'this' se refiere a 'obj'
const unboundMethod = obj.method;
unboundMethod(); // 'this' se refiere al objeto global (en modo no estricto)

/*// Ejemplo 6: Modificación del scope chain con 'with' (no recomendado)
const withObj = { x: 10, y: 20 };
//with (withObj) {
  console.log(x + y); // 30
}*/

// Ejemplo 7: Módulos y scope
// file1.js
export const moduleVar = "Soy del módulo";

// file2.js
import { moduleVar } from './file1.js';
console.log(moduleVar);

// Notas adicionales:
// - Cada función crea su propio contexto de ejecución.
// - Los contextos de ejecución forman una pila (call stack).
// - La scope chain se crea cuando se define una función, no cuando se ejecuta.
// - Las arrow functions no crean su propio 'this', heredan el 'this' del contexto circundante.