import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugins';
import {promises as fs} from 'fs'
import path from 'path';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions {
    to:string | string [];
    subject:string;
    htmlBody: string;
    attachements?: Attachement[]
}

interface Attachement {
    filename: string;
    path: string;
}

export class EmailService {

    constructor(
    ) {}

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    async sendEmail(options:SendMailOptions):Promise<boolean> {
        const { to, subject, htmlBody, attachements = [] } = options;
        try {

            const sentInformation = await this.transporter.sendMail({
                to:to,
                subject:subject,
                html:htmlBody,
                attachments: attachements
            })

            return true;
        } catch (error) {
            return false;
        }
    }

    async sendEmailWithFileSystemLogs(to:string | string []) {
        const htmlFilePath = path.join(__dirname, 'htmlBody.email.html');

        const subject = 'Logs del servidor';

        const htmlBody = await fs.readFile(htmlFilePath, 'utf8');

        const attachements: Attachement[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log'},
            { filename: 'logs-meidum.log', path: './logs/logs-medium.log'},
            { filename: 'logs-high.log', path: './logs/logs-high.log'}
        ];

        this.sendEmail({
            to,subject, attachements, htmlBody
        })

    }
}