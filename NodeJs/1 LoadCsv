const fs = require("fs");
const csv = require("csv-parser");
const results = [];

const filePath =
  "/Users/harryworlds/Desktop/Programming Projects/JavaScriptMachineLearning/sr.csv";

fs.createReadStream(filePath)
  .pipe(csv())
  .on("data", function (data) {
    results.push(data);
  })
  .on("end", function () {
    console.log(results);
  });
