"use strict";
var _a;
const heroes = [
    {
        id: 1,
        name: 'Ironman',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    },
];
const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = getHeroById(2);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Hero not found'); // { id: 2, name: 'Spiderman', owner: 'Marvel' }
//npx nodemon src/app.js para instalar nodemon y ejecutar el archivo
