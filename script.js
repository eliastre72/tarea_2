document.addEventListener("DOMContentLoaded", function () {
    const operando1 = document.getElementById("operando1");
    const operando2 = document.getElementById("operando2");
    const result = document.getElementById("result");

    document.getElementById("add").addEventListener("click", function () {
        const value1 = parseFloat(operando1.value);
        const value2 = parseFloat(operando2.value);
        const sum = value1 + value2;
        result.value = sum;
    });

    document.getElementById("subtract").addEventListener("click", function () {
        const value1 = parseFloat(operando1.value);
        const value2 = parseFloat(operando2.value);
        const difference = value1 - value2;
        result.value = difference;
    });

    document.getElementById("multiply").addEventListener("click", function () {
        const value1 = parseFloat(operando1.value);
        const value2 = parseFloat(operando2.value);
        const product = value1 * value2;
        result.value = product;
    });

    document.getElementById("divide").addEventListener("click", function () {
        const value1 = parseFloat(operando1.value);
        const value2 = parseFloat(operando2.value);
        if (value2 === 0) {
            result.value = "Error (división por cero)";
        } else {
            const quotient = value1 / value2;
            result.value = quotient;
        }
    });
});