import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";

const fileSystemRepository = new LogRepositoryImpl(
    new FileSystemDataSource());


export class Server {

    static start() {
        console.log('server start...')

        CronService.createJob('*/5 * * * * *',
            () => {
                new CheckService(
                    fileSystemRepository,
                    () => console.log('success'),
                    (error) => console.log(error),
                ).execute('https://google.com')
                // new CheckService().execute('https://localhost:3000')
            }
        );

    }

}

Server.start();

