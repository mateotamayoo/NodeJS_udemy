// const { getUuid } = require('../plugins/get-uuid.plugins');
// const { getAge } = require('../plugins/get-age.plugins');

//archivo de barril
//const {getAge, getUUID} = require('../plugins');

//const obj = {name: 'John', birthdate: '01/01/2000'};


//meter la funcion uuidv4 no es correcto porque esta demasiado acoplado y si se detectan vulnerabilidades
//tendriamos que cambiar en todos los archivos

interface BuildMakePersonOptions {
    getAge: (birthdate: string) => number;
    getUUID: () => string;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({getAge, getUUID}: BuildMakePersonOptions) => {

    return ({name, birthdate}: PersonOptions) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    }
}

// const juan = buildPerson(obj);

// console.log(juan); // { id: 1626880000000, name: 'John', birthdate: '01/01/2000', age: 21 }