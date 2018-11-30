// Lecture 132 / Section 6
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // fs = file system, fs-extra has some extra helpers

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);


const contractPath = path.resolve(__dirname, 'contracts', 'Contract.sol');
const source = fs.readFileSync(contractPath, 'utf8');

var result = solc.compile(source, 1);
var output = result.contracts;

// check folder exists, if not creat it
fs.ensureDirSync(buildPath);

for (let contract in output) {
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':', '') + '.json'),
		output[contract]
	);
}

// just to be a litte verbose at the end of the compiler action ...
if(!result.errors) {
	console.log('No ERRORs, no // WARNINGs: good to go for contacrt deployment ... happy hacking!');
} else {
	console.log(result.errors);
}
