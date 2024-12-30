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

const getHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id);
}

const hero = getHeroById(2);

console.log(hero?.name ?? 'Hero not found'); // { id: 2, name: 'Spiderman', owner: 'Marvel' }

//npx nodemon src/app.js para instalar nodemon y ejecutar el archivo