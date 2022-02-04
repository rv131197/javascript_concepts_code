// divide(1000)(10)(100,10)(10)() -> 0.01
// divide(1000,10,10)(10,10,10)() -> 0.01

function divide(...args){
    return function(...args2){
     if(args2.length<1){
         return args[0]
     }
        let arr = [...args, ...args2]
        let output = arr.reduce((acc, curr) => {
            if(curr===0) return 'invalid param'
         return acc/curr;
     })
     return divide(output)
 }


}

console.log(divide(1000,10,10)(10,10,10)(100,10)())
