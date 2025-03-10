import exp from "constants";
import { LogEntity, LogSeverityLevel } from "../entities/log.entity";
import { LogDataSource } from "./log.datasource";

describe('log.datasource.ts', () => {

const newLog = new LogEntity({
    origin: 'log data',
    message: 'test-message',
    level: LogSeverityLevel.low,
})

    class MockLogDatasource implements LogDataSource {
        async saveLog(log: LogEntity): Promise<void> {
            return ;
        }
        async getLog(severityLeve: LogSeverityLevel): Promise<LogEntity[]> {
            return [newLog]
        }

    }

    test(' should test the abstract class', async () => {

        const mockLogDatasource = new MockLogDatasource();

        expect( mockLogDatasource).toBeInstanceOf(MockLogDatasource);
        expect( typeof mockLogDatasource.saveLog).toBe('function');
        expect( typeof mockLogDatasource.getLog).toBe('function');

        await mockLogDatasource.saveLog(newLog);
        const logs = await mockLogDatasource.getLog(LogSeverityLevel.low);

        expect(logs).toHaveLength(1)
        expect(logs[0]).toBeInstanceOf(LogEntity)

    })
})