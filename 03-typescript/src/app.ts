import { getHeroById } from "./services/hero.service";


const hero = getHeroById(2);

console.log(hero?.name ?? 'Hero not found'); // { id: 2, name: 'Spiderman', owner: 'Marvel' }

//npx nodemon src/app.js para instalar nodemon y ejecutar el archivo