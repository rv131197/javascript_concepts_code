// console.log(   2 + "2" );  
// console.log( "2" + "2" );

// console.log(   2 - "2" );
// console.log( "2" - "2" );
// console.log( "A" - "A" );

// // Output

// 22
// 22

// 0
// 0
// NaN

// console.log( 10 < 20 < 30 );
// console.log( 30 > 20 > 10 );

// // Output

// true
// false

// console.log( null == 0 );
// console.log( null > 0  );
// console.log( null >= 0 );

// // Output

// false
// false
// true

// const elements = [1, 2, 3, 4, 5];

// elements.forEach(element => {
//   console.log(element);

//   if(element == 2){
//     return;
//     //break;
//     //continue;
//   }
// })

// // Output

// 1
// 2
// 3
// 4
// 5

// // Yes, its confusing in Javascript. 
// // The reason is that we are passing a callback function in forEach
// //  loop which will be executed for each element no matter if we return.

// // If you use break or continue instead of return, 
// // you get either one of the error since these are not applicable for a callback function:

// // Uncaught SyntaxError: Illegal break statement
// // Uncaught SyntaxError: Illegal continue statement

// var foo = 1;

// function myFun(){
//   console.log(foo);
  
//   var foo = 2;
// }

// myFun();

// // -----------------------------------------
// // Explanation

// var foo;
// foo = 1;

// function myFun(){
  
//   var foo;          // var hoisted and initialized with undefined
//   console.log(foo); // undefined
  
//   foo = 2;
// }

// myFun();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, i*1000);
//   }

// // Output

// 3
// 3
// 3

// // Actually it will print 3, 3, 3 after every 1 second. 
// // This is because of JavaScript Closure. Here is the explanation,

// // closure
// // A JavaScript closure is when an inner function 
// // has access to its outer function’s scope. In the following line of code:

// // setTimeout(function() { console.log(i); }, i*1000);
// // variable i is used in an inner function whereas it is actually declared 
// // in outer for loop. Inner function will be able to access the value of i through Closure.

// // hoisting
// // In Javascript hoisting process, declaration of i will be moved to the top of their scope, 
// // since i is defined using var in for loop, declaration of i will be moved to global scope in hoisting process.

// // After three iteration of for loop, value of global scoped variable i will be 3. 
// // All three closures will refer to this same i variable from global scope.

// // let
// // if i were defined using let instead of var in for loop, output would have been different. Why?

// // let is block scoped as opposed to var which is function scoped. 
// // Since for loop is also a block, value of i in each iteration is block scoped 
// // within that iteration and each closure has its own copy of i variable. Let’s look at the code,

// for (let i = 0; i < 3; i++) {
//   setTimeout(function() { console.log(i); }, i*1000);
// }

// // Output

// 0
// 1
// 2

// var a = new Person("a");
// var b = Person 
// var c = Person("c");

// function Person(fname) {
//     this.fname = fname;
// }

// console.log("1.", fname);   
// console.log("2.", a.fname);    
// console.log("3.", b.fname);    
// console.log("4.", c.fname);

// // Output

// // 1. c
// // 2. a
// // 3. undefined
// // 4. Uncaught TypeError: Cannot read property 'fname' of undefined

// // 1. fname will print c. When you execute Person("c") function, 
// // this refers to global object window and this.fname is assigned value as c.

// // 2. a.fname will print a. When you execute function using new keyword new Person("a"),
// //  this refers to newly created object.

// // 3.  b.fname will print undefined since you are just assigning a function 
// // object and not executing it. Person object is not having property named as fname

// // 4. function Person("c") doesn’t return anything so c is undefined and c.fname will throw error

// let num = 10;
// for(let i = 0; i < num; i++){
//     console.log(num);
//     num--;
// }

// // The solution is:
// 10
// 9
// 8
// 7
// 6

// var str = new String("anil");
// console.log(typeof str);

// var str1 = "anil";

// console.log(typeof str1);
// console.log(str == str1);  
// // type-coersion takes place here
// console.log(str === str1);

// // Output:

// "object"
// "string"
// true
// false

// IIFE
// (function(){
//     let a = b = 100;
//  })();

// console.log(b);  
// console.log(a);  

// // 100
// // "ReferenceError: a is not defined

// // IIFE
// (function(){
//     var b = 101;
//     let a = 100;
//  })();

// console.log(b);  
// console.log(a);  

// // "ReferenceError: b is not defined "
// //  will not reach here


function increment(num){
    return num++;
}

var n = 0;
while(n > 0){
    n = n++
    console.log(n)
}

function parent() {
    var hoisted = "a variable";
    
    function hoisted() {
       return "a function";
    }
    return hoisted();
 }
 console.log(parent());

//  Output: # TypeError: hoisted is not a function
//  Variable assignments > function declarations > variable declarations
// if var name n ftn name are same then it will take the var name

let arr = [4, 4];
for (x of arr){
    console.log(x);   
}
// output => 4,4
for (x of arr.keys()) {
    console.log(x);    // output = 🤔 ?
}
// output => 0,1

