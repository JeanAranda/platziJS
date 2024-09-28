/*
El ciclo for in se utiliza para los objetos
 */

const stPad = {
    jefe: 1,
    abogados: 5,
    asistentes: 3,
    administrativos: 1,
    notificadores: 1,
}

for (oficina in stPad){
    console.log(`${oficina}: ${stPad[oficina]}`)
}