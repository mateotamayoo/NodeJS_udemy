import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { envs } from "../config/plugins/envs.plugins";
import { EmailService } from "./email/email.service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";

const logRepository = new LogRepositoryImpl(
    // new FileSystemDataSource()
    new MongoLogDataSource(),
);

    const emailService = new EmailService();

export class Server {

    public static async start() {
        console.log('server start...')
        console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL)

        // new SendEmailLogs(
        //     emailService,
        //     fileSystemRepository
        // ).execute(
        //     ['mateo90710@gmail.com','emailparahelado@gmail.com']
        // );

        // const emailService = new EmailService(
        //     fileSystemRepository
        // );
        // emailService.sendEmailWithFileSystemLogs(
        //     ['mateo90710@gmail.com','emailparahelado@gmail.com']
        // )
        // emailService.sendEmail({
        //     to:'mateo90710@gmail.com',
        //     subject: 'Logs de sistema',
        //     htmlBody: `
        //     <h3> Logs de mejora, sin repeticion - NOC </h3>
        //     `,
        // })

        // send email

        const logs = logRepository.getLog(LogSeverityLevel.high);
        console.log(logs);
        // CronService.createJob('*/5 * * * * *',
        //     () => {
        //         new CheckService(
        //             logRepository,
        //             () => console.log('success'),
        //             (error) => console.log(error),
        //         ).execute('https://google.com')
        //         // new CheckService().execute('https://localhost:3000')
        //     }
        // );

    }

}

