var argv = require('yargs').argv
var task = require('../task')

function exec(done) {
  var params = {
    command: argv.c,
    helpCallback: function () {
      console.log("gulp exec -c 'shell-command'")
    }
  }
  task.call(this, params, done)
}

exec.description = 'execute arbitrary commands in submodules'

console.log(exec)

module.exports = function (gulp) {
  gulp.task('sm:exec', exec)
}
