// 3 - people.js
// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.


const hobbies = require('./hobbies.js')
const names = require('./names.js')

const people = () => {
  return {

    infoHobbies: hobbies('Gaming','scacchi','mangiare') ,
    infoNames: names('Carlo','Martino')
    
  }

}

console.log(people())