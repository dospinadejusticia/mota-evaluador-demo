var jsonexport = require('jsonexport');
var fs = require('fs');

var reader = fs.createReadStream('src/copy/reports/report-corteconstitucional-gov-co.json');
var writer = fs.createWriteStream('src/copy/reports/report-corteconstitucional-gov-co.csv');

reader.pipe(jsonexport()).pipe(writer);