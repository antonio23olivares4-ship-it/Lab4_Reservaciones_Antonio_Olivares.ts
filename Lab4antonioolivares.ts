
/*
Nombre: Oscar Antonio Amaya Olivares
Archivo: Lab4_Reservaciones_Nombre_Apellido.ts
Evaluación: Reservaciones
*/

interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

// 1. Reservaciones iniciales
const reservaciones: Reservacion[] = [
    { id: 1, cliente: "Ana", personas: 4, zona: "Interior" },
    { id: 2, cliente: "Luis", personas: 6, zona: "Terraza" },
    { id: 3, cliente: "Marta", personas: 5, zona: "Interior" },
    { id: 4, cliente: "Carlos", personas: 3, zona: "Terraza" }
];

console.log("1. RESERVACIONES INICIALES");
console.log(reservaciones);

// 2. Función tipada para registrar reservaciones
function registrarReservacion(
    lista: Reservacion[],
    nueva: Reservacion,
    prioritaria: boolean
): void {
    if (prioritaria) {
        lista.unshift(nueva);
    } else {
        lista.push(nueva);
    }

    console.log("Reservación registrada:", nueva.cliente);
}

// Registrar una reservación normal
registrarReservacion(
    reservaciones,
    { id: 5, cliente: "Sofia", personas: 2, zona: "Interior" },
    false
);

// Registrar una reservación prioritaria
registrarReservacion(
    reservaciones,
    { id: 6, cliente: "Pedro", personas: 7, zona: "Terraza" },
    true
);

console.log("2. LISTA ANTES DE ATENDER");
console.log(reservaciones);

// 3. Atender la primera reservación
const atendida: Reservacion | undefined = reservaciones.shift();

if (atendida !== undefined) {
    console.log("3. CLIENTE ATENDIDO:", atendida.cliente);
    console.log("Personas:", atendida.personas);
} else {
    console.log("No hay reservaciones pendientes.");
}

// 4. Buscar por identificador
const idBuscado: number = 2;

const encontrada: Reservacion | undefined =
    reservaciones.find((r: Reservacion): boolean => r.id === idBuscado);

if (encontrada !== undefined) {
    console.log("4. RESERVACIÓN ENCONTRADA");
    console.log(encontrada);
} else {
    console.log("No existe una reservación con ese ID.");
}

// Demostrar un caso inexistente
const idInexistente: number = 99;

const noEncontrada: Reservacion | undefined =
    reservaciones.find((r: Reservacion): boolean => r.id === idInexistente);

if (noEncontrada !== undefined) {
    console.log(noEncontrada);
} else {
    console.log("No existe una reservación con ID:", idInexistente);
}

// 5. Filtrar terraza con cinco o más personas
const cantidadAntes: number = reservaciones.length;

const filtradas: Reservacion[] = reservaciones.filter(
    (r: Reservacion): boolean =>
        r.zona === "Terraza" && r.personas >= 5
);

const cantidadDespues: number = reservaciones.length;

console.log("5. RESERVACIONES FILTRADAS");
console.log(filtradas);

if (filtradas.length === 0) {
    console.log("No hay coincidencias en el filtro.");
}

// 6. Comprobar la función con un arreglo vacío
const listaVacia: Reservacion[] = [];

registrarReservacion(
    listaVacia,
    { id: 7, cliente: "Elena", personas: 2, zona: "Interior" },
    false
);

console.log("Prueba de función con lista vacía:");
console.log(listaVacia);

// 7. Estado final
console.log("7. RESERVACIONES PENDIENTES");
console.log(reservaciones);

console.log("Cantidad de pendientes:", reservaciones.length);
console.log("Cantidad de coincidencias del filtro:", filtradas.length);

console.log("Cantidad antes del filtro:", cantidadAntes);
console.log("Cantidad después del filtro:", cantidadDespues);

if (cantidadAntes === cantidadDespues) {
    console.log("El filtro no eliminó registros del arreglo original.");
}
