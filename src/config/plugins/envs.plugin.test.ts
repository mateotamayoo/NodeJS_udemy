import { envs } from "./envs.plugin"

describe('env.plugin.test', () => {
    test('should return env options', () => {
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'mateo@google.com',
            MAILER_SECRET_KEY: '123123123',
            PROD: false,
            MONGO_URL: 'mongodb://mateo:123456@localhost:27017',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'mateo',
            MONGO_PASS: '123456'
        })
    })

    test('should return error if not found env', async () => {
        jest.resetModules();
        process.env.PORT = 'AC';

        try {
            await import('./envs.plugin');
            expect(true).toBe(false);
        } catch (error) {
            console.log(error)
        }
    })
})