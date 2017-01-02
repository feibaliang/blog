var exec = require('./tasks/exec')
var install = require('./tasks/install')
var list =  require('./tasks/list')
var update =  require('./tasks/update')

module.exports = registerTasks

//TODO: find all tasks in tasks folder automatically
//TODO: remove dependency injection and figure out how to register gulp tasks directly
function registerTasks (gulp) {
  exec(gulp)
  install(gulp)
  list(gulp)
  update(gulp)
}
