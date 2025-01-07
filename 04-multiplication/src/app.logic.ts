import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

console.log(yarg);

const {b:base, l:limit, s:show} = yarg;

let output = '';
const headMessage = `
===========================
    Tabla del ${base}
===========================\n
`;

for(let i = 1;i<=limit; i++) {
    output += `${base} x ${i} = ${base * i}\n`;
}

output = headMessage + output;
if(show) console.log(output);

const outputPath = `./output/tabla-${base}.txt`;

fs.mkdirSync('./output', {recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, output);
console.log(`File created at ${outputPath}`);
//npx ts-node src/app.logic.ts --base 50 -s