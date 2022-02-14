function multiply(x){
    return function multiplyBy(y){
        console.log(x*y)
    }
}

const multiplyBy2 = multiply(3)
multiplyBy2(2)