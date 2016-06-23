var gulp = require('gulp'),
    webpack = require('webpack'),
    config = require('../config'),
    rimraf = require('rimraf'),
    gutil = require('gulp-util');

gulp.task('bundle_app', ['eslint_app', 'download_all_forge_scripts', 'clean_js'], function (cb) {
    var bundleAppConfig = require('../../app/webpack.config.js');

    webpack(bundleAppConfig,
        (function (err, stats) {
            if (err) throw new gutil.PluginError("bundle_app", err);
            gutil.log("[bundle_app]", stats.toString({
                colors: true
            }));
        }));
});