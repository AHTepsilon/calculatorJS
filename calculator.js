
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

totalFinal = arr[0];
resultFinal = arr[0];
productFinal = arr[0];
quotientFinal = arr[0];

arr.forEach((number, index) =>{
    
    if(index > 0){

        totalFinal = sum(totalFinal, number);
        resultFinal = substract(resultFinal, number);
        productFinal = multiply(productFinal, number);
        quotientFinal = divide(quotientFinal, number);

        if(totalFinal == 70){ //para no mostrar los valores residuales en la consola
            console.log(totalFinal);
        }

        if(resultFinal == -50){ //para no mostrar los valores residuales en la consola
            console.log(resultFinal);
        }

        if(productFinal == 37500){ //para no mostrar los valores residuales en la consola
            console.log(productFinal);
        }

        if(quotientFinal == 0.0026666666666666666){ //para no mostrar los valores residuales en la consola
            console.log(quotientFinal);
        }

    }
    });