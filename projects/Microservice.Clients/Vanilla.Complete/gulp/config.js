var fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
    sass: "./app/common/sass/",
    appSource: "./app/**/*.{js,jsx}",
    css: "./" + project.webroot + "/src/css/",
    js: "./" + project.webroot + "/src/js/",
    npm: "./node_modules/"
};

module.exports = {
    paths: paths
};