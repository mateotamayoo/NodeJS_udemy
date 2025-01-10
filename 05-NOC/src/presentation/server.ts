import { CronJob } from "cron";

export class Server {

    static start() {
        console.log('server start...')

        const job = new CronJob(
            '*/3 * * * * *',
            () => {
                const date = new Date()
                console.log('2 second', date);
            },
        );

        job.start();
    }

}

Server.start();

