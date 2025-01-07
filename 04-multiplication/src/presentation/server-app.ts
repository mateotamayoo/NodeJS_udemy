import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
    name:string;
    destination:string;
    base:number;
    limit:number;
    showTable:boolean;
}

export class ServerApp {
    
    
    
    static run({ base, limit, showTable, name, destination}:RunOptions) {
        console.log('ServerApp running...');
        const table = new CreateTable().execute({base,limit});
        const wasCreated = new SaveFile()
            .execute({fileContent:table,
                fileDestination: destination,
                fileName: name}); 
            
        if(showTable) console.log(table);

        (wasCreated) ? console.log('File created') : console.log('Error while creating file');
    }



}