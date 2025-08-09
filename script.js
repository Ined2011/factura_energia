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
    console.log('Consumo mensual:', obtenerConsumoMensual(), 'kWh');
    console.log('Tarifa base:', obtenerTarifaBase(), 'pesos por kWh');
    console.log('Cargo fijo:', obtenerCargoFijo(), 'pesos');
    console.log('IVA (%):', obtenerIvaPorcentaje(), '%');
    console.log('Subtotal:', calcularSubtotal(), 'pesos');
    console.log('Valor del IVA:', calcularValorIva(), 'pesos');
    console.log('Total a pagar:', calcularTotal(), 'pesos');
}








// Mostrar en consola la factura
console.log(mostrarFactura());


