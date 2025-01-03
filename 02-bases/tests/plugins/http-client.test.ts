import { httpClientPlugin } from '../../src/plugins/http-client';


describe('httpClientPlugin', () => {

    test('should return a string', async () => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/posts/1');
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: expect.any(String),
        });
    });
});
