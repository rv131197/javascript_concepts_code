let name = {
    first: "Ramya",
    last: "V"
  }
  
  let name2 = {
    first: "Sachin",
    last: "Tendulkar"
  }

  printName = function(age, state){
    console.log(this.first + " " + this.last + " " + age + " " + state) 
  }

//function borrowing using call

printName.call(name2, "12" , "karnataka")
printName.call(name, "78", "mumbai")

// send the params in arraylist in apply

printName.apply(name, ["11", "bangalore"])

// bind - you dont have to call the method directly, bind - it binds the copy of the method with the object and 
//  returns a new function which can be invoked later.

let printMyName = printName.bind(name, "12" , "karnataka")
console.log(printMyName)
printMyName()