var spawn = require('child_process').spawn

function install (done) {
  var child = spawn('git', ['submodule', 'update', '--init', '--recursive']);
  child.stdout.on("end", function() { done() });
  child.stdout.pipe(process.stdout)
}

install.description = "install all submodules"

module.exports = function (gulp) {
  gulp.task('sm:install', install)
}
