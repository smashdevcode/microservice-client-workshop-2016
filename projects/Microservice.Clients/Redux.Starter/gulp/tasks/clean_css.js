var gulp = require("gulp"),
    rimraf = require("rimraf"),
    config = require('../config');

    gulp.task("clean_css", function (cb) {
        rimraf(config.paths.css, cb);
    });