var task = require('../task')

function list (done) {
  var params = {
    command: 'printf $name',
  }
  task.call(this, params, done)
}

list.description = "list all submodules"

module.exports = function (gulp) {
  gulp.task('sm:list', list)
}
