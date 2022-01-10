const _ = require('lodash')

let developer1 = {
    name: "ramya",
    location: {
        state: 'Karnataka'
    },
    calcAge(params){
        return 30;
    },
    joining: new Date()
}

//partial deep copy

let developer2 = Object.assign({}, developer1)
developer2.name='jeevan'
developer2.location.state = 'new karnataka'

let developer3 = { ...developer1 }

console.log(developer1)
console.log(developer2)
console.log(developer3)

let developer4 = JSON.parse(JSON.stringify(developer1))
developer4.location.state = 'keep as karanartaka'

console.log(developer4)

// if you have function and object like new Date() and if you copy
// using parse and stringify, function will be lost and objects will become strings

// for this u need to install lodash

// npm i lodash

let developer5 = _.cloneDeep(developer1)
developer5.location.state = 'dont change'

let developer6 = JSON.parse(JSON.stringify(developer1))

console.log(developer5)
console.log(developer6)


