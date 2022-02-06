(function(){
    var a = b = 3;
})();

console.log("a defined? " + typeof a + "---" + (typeof a !== 'undefined')); // a defined? undefined ---- false  ----> functional scope

console.log("b defined? " + typeof b + "---" + (typeof b !== 'undefined')); // b defined? Number ---- true ---> global scope

const profiles = {
    name: 'XYZ',
    getName: function(){
        console.log(this.name); //XYZ
    }
}

console.log('outer------', profiles.getName()); // outer------ undefined , use return to get the output