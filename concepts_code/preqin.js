// import React, { Component } from ‘react’;
// import ‘./App.scss’;
// class App extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {        
//     };
// }
//   render() {
//     return (
//       <div>       
//         <button id=“ClickMe” className=“click-me”>Click Me</button>
//       </div>
//     )
//   }
// };
// export default App;


describe('it renders', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    })
})

describe('button click', () => {
    it('has value', () => {
        const wrapper = shallow(<App />)
        const value = wrapper.find('#ClickMe').text();
        const expected = 'Click Me'
        expect(value).toEqual(expected)
    })

    it('prints click me', () => {
        const wrapper = shallow(<App />)
        const value = wrapper.find('#ClickMe').simulate('click')
        const expected = 'Click Me'
        expect(value).toEqual(expected)
    })
})

describe('snapshots', () => {
    it('matches snapshot', () => {
        const tree = shallow(<App />)
        expect(toJSON(tree)).toMatchSnapshot();
    })
})


function closure(){
    var a = 10;
    function inner(){
        console.log(a)
    }
    inner()
}


console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

one
three
two

let numbers = [100, 2, 50, 35, 4];
numbers.sort();
console.log(numbers);

function modifyArray(arr, callback) 
{
 arr.push(100);
 arr.pop(2);
 arr.shift(3);
 callback();
}
var arr = [2, 3, 14, 55];

    modifyArray(arr, function() 
    {
    console.log(arr);
    });

var arr = [[1,2], [3,4], [4,5]]
// console.log(arr.flat());

function removeDuplicates(arr){
    let output = [];
    const map = {}
    for(let i = 0;i<arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]] = 1
        }
    }

    for(i in map){
        output.push(parseInt(i))
    }
    return output;
}

console.log(removeDuplicates(arr.flat()))
