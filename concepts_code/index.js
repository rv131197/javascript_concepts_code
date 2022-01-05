// Polyfill for Bind

let name1 = {
  first: "Ramya",
  last: "V"
}

printName = function(age, state) {
  console.log(this.first + " " + this.last + " " + age + " " + state)
}

// printMyName = printName.bind(name1, "12")
// printMyName();


// own implementation of bind -> polyfill for bind

Function.prototype.myBind = function(...args){
  console.log(...args)
  console.log("1", args)
  let obj = this, params = args.slice(1)
  console.log("2", params)
  return function(...args2){
    obj.apply(args[0], [...params, ...args2])
  }
}
printName2 = printName.myBind(name1, "12")
printName2("Karnataka");