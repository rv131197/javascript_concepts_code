console.log(x)
var x, y;
function sayHello(){
    console.log('hello');
}

x = 1;
y = 2;

var x = 10;
  
function test()
{
    if (x > 20) {
        var x = 50;
    }
  
    console.log(x);
}
  
test();

var x = 10; 
console.log(x); 

if (true) { 
	(function() { 
		var x = 20; 
		console.log(x); 
	})(); 
} 

console.log(x); 

10
20
10

for (var i = 0; i < 5; i++) {
    function interval(i){
        return(
            setTimeout(function() { console.log(i); }, i * 1000 )
        )
    }
    interval(i)
  }

// prime numbers, 1 to 100

function printPrime(){
    for(let i = 0; i<=100; i++){
        if(i < 10 &&( i/2==1 || i/3==1 || i/5==1 || i/7==1)){
            console.log(i)
        }else if(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0){
            console.log(i)
        }
    }
}

console.log(printPrime())

// 4*3*2*1 = 4!

let output = 1;
function recuresiveFactorial(n){
        if(n==0) return 1;
        return recuresiveFactorial(n-1) * n
}

console.log(recuresiveFactorial(5))
    
    function recuresiveFactorial(n){
        let output;
        for(let i = 0; i< n; i+=2){
            output = n * n-1;
            n--
        }
        return output
    }
    
