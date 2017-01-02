var task = require('../task')

function update (done) {
  var params = {
    command: 'echo "**Updating $name $branch**" && git fetch origin && git checkout $branch && git merge origin $branch'
  }
  task.call(this, params, done)
}

update.description = "git pull origin for all submodules"

module.exports = function (gulp) {
  gulp.task('sm:update', update)
}
