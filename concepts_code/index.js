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

// polyfill for map

arr = [1,2,3,4,5]


Array.prototype.myMap = function(callback){
    const result = [];
    for(let i = 0; i< this.length; i++){
      if (this.indexOf(this[i]) > -1) {
      result.push(callback(this[i]))
      }
    }
    return result
}

console.log(arr.myMap(ele => ele*2))
console.log(arr.map(ele => ele*2))

// polyfill for filter

arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
console.log(arr1.filter(ele => ele%2 != 0))

Array.prototype.myFilter = function(callback){
  let result = []
  for(let i = 0; i<this.length; i++){
    if(callback(this[i])){
      result.push(this[i])
    }
  }
  return result
}

console.log(arr1.myFilter(ele => ele%2 != 0))

// Polyfill for reduce

arr2 = [1,2,3,4,5,6,7]
console.log(arr2.reduce((acc,curr) => {
  return acc+=curr
}))

Array.prototype.myReduce = function(callback){
  let sum = 0;
  for(let i =0;i<this.length;i++){
     callback(...sum, this[i])
  }
}

console.log(arr2.myReduce((acc,curr) => {
  return acc+=curr
}))