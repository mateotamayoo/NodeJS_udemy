import fs from 'fs';
import { SaveFile } from './save-file.use-case';
import exp from 'constants';

describe('SaveFileUseCase', () => {

    const options = {
        fileName: 'mejorar',
        fileDestination: 'persona',
        fileContent: 'trabajo en uno mismo'
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    afterEach(() => {
        const exists = fs.existsSync('outputs');

        if (exists) fs.rmSync('outputs', {recursive:true});

    })

    test('should save file with default values',() => {
        const savefile = new SaveFile();
        const filePath = 'outputs/table.txt'
        const options = {
            fileContent: 'test content'
        }

        const result = savefile.execute(options);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect(result).toBeTruthy();
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    })

    test('should save file with custom values', () => {
        
        const {fileName, fileDestination, fileContent} = options;
        const saveFile = new SaveFile();
        const result = saveFile.execute({fileName, fileDestination, fileContent});

        const filePath = `${fileDestination}/${fileName}.txt`
        const fileContentAfterCreated = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect(result).toBeTruthy();
        expect(fileContentAfterCreated).toBe(fileContent);

    });

    test('should return false if directory could not be create', () => {
        
        const saveFile = new SaveFile();

        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error('Error while creating directory');}
        );

        const result = saveFile.execute(options);
        expect(result).toBe(false);
        mkdirSpy.mockRestore();

    });

    test('should return false if file could not be create', () => {
        
        const saveFile = new SaveFile();

        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation( () => {
            throw new Error('This is a custom writing error message');
        });
        // const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
        //     throw new Error('Error while creating directory');}
        // );

        const result = saveFile.execute({fileContent: 'h'});
        expect(result).toBe(false);
        writeFileSpy.mockRestore();

    });
})