import fs from 'fs';
import { SaveFile } from './save-file.use-case';
import exp from 'constants';

describe('SaveFileUseCase', () => {

    beforeEach(() => {
        //clean up
        fs.rmdirSync('outputs', {recursive:true});
    })

    afterEach(() => {
        fs.rmSync('outputs', {recursive:true})
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
})