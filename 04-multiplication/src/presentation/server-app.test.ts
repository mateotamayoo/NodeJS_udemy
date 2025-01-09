import { ServerApp } from './server-app';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';


describe('Server App', () => {

    const options = {
        base: 2,
        limit:10,
        showTable: true,
        destination: 'test-destination',
        name: 'test-filename'
    };

    test('should create serverapp instance', () => {
        const serverapp = new ServerApp();
        expect (serverapp).toBeInstanceOf(ServerApp);
        expect (typeof ServerApp.run).toBe('function');
    });

    test('should run Serverapp with options', () => {

        // const logSpy = jest.spyOn(console,'log');
        // const createTablespy = jest.spyOn(CreateTable.prototype, 'execute');
        // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');



        // ServerApp.run(options);

        // expect(logSpy).toHaveBeenCalledTimes(3);

        // expect(createTablespy).toHaveBeenCalledWith({
        //     base:options.base, limit: options.limit
        // })

        // expect(saveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     fileDestination: options.destination,
        //     fileName: options.name
        // })

        test('should run with custom values mocked', () => {

            
            ServerApp.run(options);
        })
    })

});