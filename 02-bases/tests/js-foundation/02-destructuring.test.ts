import { characters } from "../../src/js-foundation/02-destructuring"


describe('Destructuring', () => {
    test('characters should contain flash', () => {
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');

    });

});
