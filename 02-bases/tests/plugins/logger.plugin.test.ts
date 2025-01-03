
import { buildLogger } from '../../src/plugins/logger.plugin';

describe('Logger Plugin', () => {
    test('should return a function logger', () => {

        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.log).toBe('function');

    });
});