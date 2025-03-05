import { LogEntity, LogSeverityLevel } from "./log.entity"

describe ('LogEntity', () => {
    test('should create a LogEntity instance', () => {
        const dataObj = new LogEntity({
            message: 'Hola mundo',
            level: LogSeverityLevel.high,
            origin: 'log.entity.test.ts'
        });

        const log = new LogEntity(dataObj)

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObj.message);
        expect(log.level).toBe(dataObj.level);
        expect(log.origin).toBe(dataObj.origin);

    });

    test('should create a LogEntity instance from json', () => {
        const json = `"message":"service https://google.com is working","level":"low","createdAt":"2025-02-19T16:42:20.011Z","origin":"check-service.ts"`;

        const log = LogEntity.fromJson(json);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe("service https://google.com is working");
        expect(log.level).toBe(LogSeverityLevel.low);
        expect(log.origin).toBe("check-service.ts");
        expect(log.createdAt).toBe("2025-02-19T16:42:20.011Z")
    })
})