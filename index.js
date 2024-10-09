var postcss = require("postcss");
var cssvariables = require("postcss-css-variables");

var fs = require("fs");

var mycss = fs.readFileSync("input.css", "utf8");

// Process your CSS with postcss-css-variables
var output = postcss([cssvariables(/*options*/)]).process(mycss).css;

fs.writeFileSync("output.css", output);

// console.log(output);