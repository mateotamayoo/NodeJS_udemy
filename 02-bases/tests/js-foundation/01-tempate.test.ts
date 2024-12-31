

describe('Template', () => {
    test('template should contain a string', () => {
        const template = 'Hello, World!';
        expect(template).toMatch(/Hello, World!/);
    });
});