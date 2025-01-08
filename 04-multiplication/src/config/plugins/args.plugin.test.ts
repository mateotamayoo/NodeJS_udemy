
const runCommand = async(args: string []) => {
    
    process.argv = [...process.argv, ...args];

    const { yarg } = await import('./args.plugin');

    return yarg;
}

describe('Test args.plugin.ts', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })

    test('should return defualt values', async () => {
        const argv = await runCommand(['-b', '5']);
        expect(argv).toEqual(expect.objectContaining({
            b:5,
            l:10,
            s:false
        }));
        console.log(process.argv);

    });

    test('should return configuration with custom values', async () => {
        const argv = await runCommand(['-b', '15', '-l', '20', '-s']);
        expect(argv).toEqual(expect.objectContaining({
            b:15,
            l:20,
            s:true
        }));
        console.log(process.argv);
    })
});