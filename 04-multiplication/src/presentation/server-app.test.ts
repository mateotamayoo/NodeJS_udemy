import { ServerApp } from './server-app';

describe('Server App', () => {
    test('should create serverapp instance', () => {
        const serverapp = new ServerApp();
        expect (serverapp).toBeInstanceOf(ServerApp);
        expect (ServerApp.run).toBe('function');
    });
});