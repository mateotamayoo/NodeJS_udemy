const { getAge } = require("./get-age.plugins");
const { getUUID } = require("./get-uuid.plugins");
const { http } = require("./http-client");
const buildLogger = require("./logger.plugin");

module.exports = {
    getAge,
    getUUID,
    http,
    buildLogger
}
