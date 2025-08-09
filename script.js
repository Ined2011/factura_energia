// 1️⃣ Función declarativa: consumo mensual en kWh
function obtenerConsumoMensual() {
    return 410; // kWh
}

// 2️⃣ Función declarativa: tarifa base por kWh
function obtenerTarifaBase() {
    return 620; // pesos por kWh
}

// 3️⃣ Función de expresión: cargo fijo
const obtenerCargoFijo = function() {
    return 3500; // pesos
};

// 4️⃣ Función de expresión: porcentaje de IVA
const obtenerIvaPorcentaje = function() {
    return 19; // porcentaje
};


// 5️⃣ Función flecha: subtotal (consumo × tarifa)
const calcularSubtotal = () => {
    return obtenerConsumoMensual() * obtenerTarifaBase();
};

// 6️⃣ Función flecha: valor del IVA
const calcularValorIva = () => {
    return calcularSubtotal() * (obtenerIvaPorcentaje() / 100);
};

// 7️⃣ Función flecha: total a pagar
const calcularTotal = () => {
    return calcularSubtotal() + calcularValorIva() + obtenerCargoFijo();
};

// 8️⃣ Función final: imprimir resultados
function mostrarFactura() {
    return `
📄 Factura Mensual - Empresa de Energía
--------------------------------------
Consumo mensual: ${obtenerConsumoMensual()} kWh
Tarifa base: ${obtenerTarifaBase()} pesos/kWh
Subtotal: ${calcularSubtotal()} pesos
IVA (${obtenerIvaPorcentaje()}%): ${calcularValorIva()} pesos
Cargo fijo: ${obtenerCargoFijo()} pesos
--------------------------------------
💰 Total a pagar: ${calcularTotal()} pesos
    `;
}

// 🔹 Llamadas para cumplir con la condición de invocar todas las funciones
obtenerConsumoMensual();
obtenerTarifaBase();
obtenerCargoFijo();
obtenerIvaPorcentaje();
calcularSubtotal();
calcularValorIva();
calcularTotal();

// Mostrar en consola la factura
console.log(mostrarFactura());


