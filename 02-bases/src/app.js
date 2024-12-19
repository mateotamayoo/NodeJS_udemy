//desestructuración 

// const {basicTemplate} = require('./js-foundation/01-tempate');

// require('./js-foundation/02-destructuring')

const { getUserById } =require('./js-foundation/03-callbacks');

const id = 1;

getUserById(id, (error, user) => {
    if(error) {
        throw new Error(error);
    }
    console.log(user);
});
