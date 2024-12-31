import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('Factory', () => {

    const getUUID = () => '1234';
    const getAge = () => 21;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person object', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        const person = makePerson({ name: 'John', birthdate: '01/01/2000' });
        expect(person).toEqual({ id: '1234', name: 'John', birthdate: '01/01/2000', age: 21 });
    });
});
