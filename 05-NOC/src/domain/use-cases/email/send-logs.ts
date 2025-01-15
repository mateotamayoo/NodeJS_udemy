import path from "path";
import { EmailService } from "../../../presentation/email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendLogEmailUseCase {
    execute: (to: string | string []) => Promise<boolean>
}

export class SendEmailLogs implements SendLogEmailUseCase {

    constructor(
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository,
    ) {

    }
    async execute (to: string | string []) {
        try {

            const sent = await this.emailService.sendEmailWithFileSystemLogs(to).catch

            if( !sent ) {
                throw new Error('email log not sent');
            }

            return true;
        } catch (error) {
            const log = new LogEntity({
                message: `${error}`,
                level:LogSeverityLevel.high,
                origin: path.basename(__filename),
            })
            this.logRepository.saveLog(log)
            return false;
        }
    }
}