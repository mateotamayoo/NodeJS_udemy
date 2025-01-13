import { CronJob } from "cron";
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";

export class Server {

    static start() {
        console.log('server start...')

        CronService.createJob('*/5 * * * * *', 
            () => {
                new CheckService(
                    () => console.log('success'),
                    (error) => console.log(error),
                ).execute('https://google.com')
                // new CheckService().execute('https://localhost:3000')
  
            }
        );

    }

}

Server.start();

