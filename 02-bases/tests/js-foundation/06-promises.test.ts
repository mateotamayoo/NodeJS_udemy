import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('06-promises', () => {
    test('should return a pokemon', async () => {
        const pokemon = await getPokemonById(1);
        expect(pokemon).toBe('bulbasaur');
    });


    test('should return an error if pokemon does not exist', async () => {
        try {
            await getPokemonById(10000);
        } catch (error) {
            expect(error).toBe('Pokemon not found with id 10000');
        }
    });
});