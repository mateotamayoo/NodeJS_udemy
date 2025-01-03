// //desestructuración

import { getUserById } from "./js-foundation/03-callbacks";

// // const {basicTemplate} = require('./js-foundation/01-tempate');

// // require('./js-foundation/02-destructuring')

// const { getAge, getUUID } = require('./plugins');

// //const { getUserById } =require('./js-foundation/05-factory');

// // const id = 1;

// // getUserById(id, (error, user) => {
// //     if(error) {
// //         throw new Error(error);
// //     }
// //     console.log(user);
// // });

// const getPokemonById = require('./js-foundation/06-promises');

// // getPokemonById(1)
// //     .then( ( pokemon ) => console.log({pokemon}) )
// //     .catch( ( err ) => console.log('Intenta de nuevo') )
// //     .finally( () => console.log('Finalmente') )

getUserById(1, (error, user) => {
    if (error) {
        throw new Error(error);
    }
    console.log(user);
});


// import { buildLogger } from "./plugins/logger.plugin";

// const logger = buildLogger('app.js');

// logger.log('Hello from app.js');


// export const name:string = "fernado";
// console.log(name)



// // ! rEFERENCIA A FACTORY FUNCTIONS Y USO
// // const { buildMakePerson } = require('./js-foundation/05-factory');

// // const makePerson = buildMakePerson({ getUUID, getAge });

// // const john1 = {name: 'John', birthdate: '01/01/2000'};

// // const john = makePerson(john1);

// // console.log(john);
