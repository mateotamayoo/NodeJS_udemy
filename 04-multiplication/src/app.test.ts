import { ServerApp } from "./presentation/server-app";

describe('App', () => {
    test('should call Server.run with values', async () => {
        const serverRunMock = jest.fn();

        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', '-test-file', '-d']

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base:10,
            limit:5,
            showTable: true,
            fileDestination:'test-destination'
        });
    });
});