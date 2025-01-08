
const runCommand = async(args: string []) => {
    
    process.argv = [...process.argv, ...args];

    const { yarg } = await import('./args.plugin');

    return yarg;
}

describe('Test args.plugin.ts', () => {

    test('should return defualt values', async () => {
        const argv = await runCommand(['-b', '5']);
        expect(argv).toEqual(expect.objectContaining({
            b:5,
            l:10,
            s:false
        }));
        console.log(process.argv);

    });
});