const winston = require('winston');
const { combine, timestamp, label, printf, json } = winston.format;

const logger = new (winston.Logger)({
  level: 'info',
    format: combine(
      timestamp(),
      json(),
    ),
    transports: [
      new (winston.transports.File)({
        name: 'info-file',
        filename: 'filelog-info.log',
        level: 'info'
      }),
      new (winston.transports.File)({
        name: 'error-file',
        filename: 'filelog-error.log',
        level: 'error'
      })
    ]
  });

module.exports = function buildLogger(service) {
    return {
        log: (message) => {
            logger.log('info', {message, service});
        }
    }
};