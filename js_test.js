function getDecimal(n) {
    const integerPart = Math.floor(n);
    const decimalPart = Math.abs(integerPart-n);
    return parseFloat(decimalPart.toFixed(1));
}

const n = -3.2;
const result = getDecimal(n, 1); // Получаем результат
console.log(result);



