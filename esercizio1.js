class utente {
    contructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    confronta(persona){
        if(this.age > persona.age) {
            return this.firstName + 'è più vecchio di' + persona.firstName
        } else if (this.age < persona.age){
            return this.firstName + ' è più giovane di' + persona.firstName
        }
    } 
}

const user1 = new utente('bruno','lilo','30','torino')
const user2 = new utente ('jhon','milos','27','milano')



const confronto = user1.confronta(user2)
console.log(confronto)

//mi compare undefined nel numero 23

//console.log(user1.confronta(user2)) --provando...
