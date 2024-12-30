const { getAge } = require("./get-age.plugins");
const { getUUID } = require("./get-uuid.plugins");
const { http } = require("./http-client");

module.exports = {
    getAge,
    getUUID,
    http
}
