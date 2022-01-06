// currying - we define a mthod, make more functions out of it
// we curry our functions by presetting some argument values

// 2 ways - bind and closures

// bind

let multiply = function(X, Y){
  console.log(X*Y)
}

let multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(4)

let multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(6)

// closures

let mul = function(x){
  return function(y){
    console.log(x*y)
  }
}

let mul2 = mul(2)
mul2(5)