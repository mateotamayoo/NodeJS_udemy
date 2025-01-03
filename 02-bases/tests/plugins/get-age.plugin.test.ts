
import { getAge } from "../../src/plugins";

describe('Get Age', () => {
    test('getAge should return the age of a person', () => {
        const birthdate = '01/01/2000';
        const age = getAge(birthdate);
        expect(age).toBe(25);
    });

    test('getAge should return 0 years old', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '01/01/1995';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();
    });
});


