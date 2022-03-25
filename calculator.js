
const arr = [10, 5, 30, 25];

function sum(num1, num2){
    const total = num1 + num2;

    return total;
}

function substract(num1, num2){
    const result = num1 - num2;

    return result;

}

function multiply(num1, num2){
    const product = num1 * num2;

    return product;
}

function divide(num1, num2){
    const quotient = num1 / num2;

    return quotient;

}

total1 = sum(arr[0], arr[1]);
total2 = sum(arr[2], arr[3]);

totalFinal = sum(total1, total2);

console.log(totalFinal);