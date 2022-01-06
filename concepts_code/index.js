const person = {
    first: 'Ramya',
    last: 'V',
   get fullName (){
        return `${person.first} ${person.last}`
    },
    set fullName(value){
        const parts = value.split(' ')
        this.first = parts[0],
        this.last = parts[1]
    }
}

person.fullName = 'Jeevan kumar'
console.log(person);

