var fs = require('fs');

console.log("going to get a file");
fs.readFile('readFileSync.js', function(err, file) {
	console.log("got the file");
});

console.log("app continues...");