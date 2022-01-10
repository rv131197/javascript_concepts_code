var name = "outer";

  function foo() {
      var name = "inner";
      console.log(name);
  }
  foo();


  console.log(typeof foo)

  function foo() {
    console.log("1");
  }

  var foo = 9;

  console.log(typeof foo);


console.log('one');

setTimeout(function() {
  console.log('two');
}, 0);

Promise.resolve().then(function() {
  console.log('three');
})

console.log('four');

    const user = {
  name: 'RAM',
  location: {
    city: 'IND',
    state: 'AUS'
  }
    }

const copy = Object.assign({}, user); 
// shallow copy - first level copy

const copy = JSON.parse(JSON.stringify(user)); 
// Deep copy

copy.location.city = 'UK';
copy.name="Sri"

console.log('original: ', user.location.city); 
console.log('copy:', copy.location.city); 

console.log('original: ', user.name); 
console.log('copy:', copy.name); 

let ls=[1,2,3, [4,5] ,[[6,7,8,9]]]
console.log(ls.flat(4))

ls=[1,2,3,4,5,6,7,8,9]

let flattenedArray = []
function flat(object){
    for(let i=0; i<object.length; i++){
        // console.log(typeof object[i])
        if(Array.isArray(object[i])){
            flat(object[i])
        }else{
            flattenedArray.push(object[i])
        }
    }
    return flattenedArray
}

console.log(flat([1,2,3, [4,5] ,[[6,7,8,9]]]))

const shape = {
    radius: 10,
    perimeter: () => 2 * this.radius,
  };

const shape2 = {
    radius: 20
}

function diameter(abc, xyz) {
    console.log(this)
    return this.radius * 2 * abc * xyz;
}
var radius = 25;
console.log(diameter(23, 45))

 const diameter2 = (abc, xyz) => {
    console.log(this)
    return this.radius * 2 * abc * xyz;
}
var radius = 25;
console.log(diameter2(23, 45))

// points to global object

  console.log(shape.diameter());
  console.log(shape.perimeter());

let test1 = diameter.bind(shape , 20, 40)
console.log(test1())


for (var i = 0; i < 3; i++) {
    function nr(i){
       setTimeout(() => console.log(i), i*10, i);
    //    check 3rd arg
    } 
    nr(i)
  }

let isloading = true
setTimeout(() => {
  isloading=false
},0)

while (isloading) {
  console.log('hi')
}

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers.length);

function test1(){
    var x = 10;
    return function test2(){
        console.log(x)
    }
}

console.log(test1()())

sum(3)(5)

function sumOfTwo(x){
    return function sum(y){
        console.log(x+y)
    }
}

console.log(sumOfTwo(3)(5))

multile(5)
multile(5)(2)

function Multi(x){
    console.log(x*y)
}

let MultiplyByOne = multile.bind(this, 5)
MultiplyByOne(1)

function Multi(x){
    if(!y){
        return x
    }else return function multipy(y){
            console.log(x*y)
    }
}

console.log(Multi(3))

sum(1)(2)(3)()

function dynamicSum(x){
    return function sum(y){
        if(y){
          return dynamicSum(x+y)
        }else{
            return x;
        }
    }
}

console.log(dynamicSum(5)(9)())



function add(x, y, z, a){
    return x+y+z+a;
}

function currySum(fn){
   let n = fn.length
   console.log(n)
   return function nr(...args){
    //    console.log(n, args.length)
    if(args.length < n){
        return function(...more){
            return nr(...args, ...more)
        }
    }else{
       return fn(...args)
    }
   }
}

let sum = currySum(add)

console.log(sum(1, 2, 3,7));
console.log(sum(1)(2)(3)(6));
console.log(sum(1, 2)(3, 5));
console.log(sum(1)(2, 3)(6));

String.prototype.sayHello = function() {
    let obj = this;
    console.log("Hello" + " " + obj)
}

let s="ramya"
s.sayHello()

// polyfill for map
console.log(number.map(ele => ele + 10))

var number  = [1, 2, 3, 4, 5]
Array.prototype.myMap = function(fn) {
    let obj = this, myArray = [];
    console.log(this)
    for(var i = 0; i<obj.length; i++){
        myArray.push(fn(obj[i]))
    }
    return myArray;
}

console.log(number.myMap(ele => ele + 10))

// polyfills for filter, reduce

// what is promise? states in promise.
// diff b/w promise.all and promise.allsettled
// event bubbling, delegation
// e.target and e.currentTarget

let x = 0;
let x = 1;
console.log(x)

const x = 0;
const x = 1;
console.log(x)
