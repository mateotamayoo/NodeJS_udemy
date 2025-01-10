"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cron_1 = require("cron");
class Server {
    static start() {
        console.log('server start...');
        const job = new cron_1.CronJob('*/3 * * * * *', () => {
            const date = new Date();
            console.log('2 second', date);
        });
        job.start();
    }
}
exports.Server = Server;
Server.start();
