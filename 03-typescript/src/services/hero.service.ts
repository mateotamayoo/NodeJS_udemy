import { heroes } from "../data/herores";


export const getHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id);
}