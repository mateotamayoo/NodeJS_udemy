import path from "path";
import { LogEntity, LogEntityOptions, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import fs from 'fs';

interface CheckServiceMultipleUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error:String) => void) | undefined;

export class CheckServiceMultiple implements CheckServiceMultipleUseCase {

    constructor(
        private readonly logRepository: LogRepository[],
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback) {

    }

    private callLogs( log:LogEntity) {
        this.logRepository.forEach( logRepository => {
            logRepository.saveLog(log);
        })
    }

    public async execute(url: string): Promise<boolean> {
        const optionsLog: LogEntityOptions = {
            level: LogSeverityLevel.low,
            message: "",
            origin: path.basename(__filename),
            createdAt: new Date()
        }

        try {
            const req = await fetch(url);

            if(!req.ok) {
                throw new Error(`Error on check service ${url}`)
            }
            optionsLog.message = `service ${url} is working`;

            const log = new LogEntity(optionsLog);

            this.callLogs(log);
            this.successCallback && this.successCallback();

            return true;

        } catch (error) {
            const errorString = (`${error}`)

            optionsLog.message = errorString;

            const log = new LogEntity(optionsLog);

            this.callLogs(log);
            this.errorCallback&& this.errorCallback(errorString);

            return false;
        }

    }
}