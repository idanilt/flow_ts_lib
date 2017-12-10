// @flow
/**
 * first and very ugly impl, jest regex, need to do something like babel
 */

const fs = require('fs');
const path = require('path');

const input = process.argv[2];
const output = path.join(process.cwd(),process.argv[3]);

function removeImports(file) {
  return file.replace(/\bimport\b[^;]*;/g, '');
}
function replaceClassWithInterface(file) {
  return file.replace(/\bdeclare\b \bexport\b class\b/, 'export class');
}


let file = fs.readFileSync(path.join(process.cwd(),input), "utf8");
file = removeImports(file);
file = replaceClassWithInterface(file);

fs.writeFileSync(output, file, "utf8");