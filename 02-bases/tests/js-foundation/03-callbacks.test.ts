import { getUserById } from "../../src/js-foundation/03-callbacks"


describe('Callbacks', () => {
    test('getUserById should return a user', (done) => {
        const id = 1;
        getUserById(id, (error, user) => {
            expect(error).toBeUndefined();
            expect(user).toEqual({ id: 1, name: 'John Dae' });
            done();
        });
    });

    test('getUserById should not found a user', (done) => {
        const id = 10;
        getUserById(id, (error, user) => {
            expect(error).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });
});