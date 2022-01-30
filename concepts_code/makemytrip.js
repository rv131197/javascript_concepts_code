// Implement sum(1)(2,3)=sum(1,2,3)=sum(1,2)(3)=6

function sum(...args1){
    return function innerSum(...args2){
        if(args1.length>1){
            args1.reduce((acc, curr) => args2.push(acc+=curr))
            args2.reduce((acc, curr) => {
                acc+=curr;
                console.log(acc)
            })
        }
        if(args2.length>1){
            args2.reduce((acc, curr) => args1.push(acc+=curr))
            args1.reduce((acc, curr) => {
                acc+=curr;
                console.log(acc)
            })
        }
    }
}

let getSum = sum(1, 2, 3)
getSum()

