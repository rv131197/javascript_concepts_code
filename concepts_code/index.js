// Debouncing in JS

let counter = 0
const getData = () => {
  // calls an APi and gets data
  console.log("Fetching Data.....", counter++)
}

function doSomeMagic(fn, d){
  let timer;
  return function(){
    let context = this, args=arguments;
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(context, args)
    }, d)
  }
}

const betterFunction = doSomeMagic(getData, 300)