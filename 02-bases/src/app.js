//desestructuración

// const {basicTemplate} = require('./js-foundation/01-tempate');

// require('./js-foundation/02-destructuring')

const { getAge, getUUID } = require('./plugins');

//const { getUserById } =require('./js-foundation/05-factory');

// const id = 1;

// getUserById(id, (error, user) => {
//     if(error) {
//         throw new Error(error);
//     }
//     console.log(user);
// });

const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1,(pokemon) => {
    console.log({pokemon});
});




// ! rEFERENCIA A FACTORY FUNCTIONS Y USO
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const john1 = {name: 'John', birthdate: '01/01/2000'};

// const john = makePerson(john1);

// console.log(john);
