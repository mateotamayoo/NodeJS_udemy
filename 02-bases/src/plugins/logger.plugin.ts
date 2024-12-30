import winston, { format } from 'winston';

//const winston = require('winston');
const { combine, timestamp, label, printf, json } = winston.format;

const logger = new (winston.Logger)({
  level: 'info',
    format: combine(
      timestamp(),
      json(),
    ),
    transports: [
      new (winston.transports.File)({
        filename: 'filelog-info.log',
        level: 'info'
      }),
      new (winston.transports.File)({
        filename: 'filelog-error.log',
        level: 'error'
      })
    ]
  });

export const buildLogger = (service: string) => {
    return {
        log: (message:string) => {
            logger.log('info', {message, service});
        }
    }
};