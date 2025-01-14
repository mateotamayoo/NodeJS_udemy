"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cron_service_1 = require("./cron/cron-service");
const check_service_1 = require("../domain/use-cases/checks/check-service");
const log_impl_repository_1 = require("../infrastructure/repositories/log-impl.repository");
const file_system_datasource_1 = require("../infrastructure/datasources/file-system.datasource");
const fileSystemRepository = new log_impl_repository_1.LogRepositoryImpl(new file_system_datasource_1.FileSystemDataSource());
class Server {
    static start() {
        console.log('server start...');
        cron_service_1.CronService.createJob('*/5 * * * * *', () => {
            new check_service_1.CheckService(fileSystemRepository, () => console.log('success'), (error) => console.log(error)).execute('https://google.com');
            // new CheckService().execute('https://localhost:3000')
        });
    }
}
exports.Server = Server;
Server.start();
