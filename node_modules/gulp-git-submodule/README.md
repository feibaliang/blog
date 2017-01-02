# gulp-git-submodule

This is a simple package to make it easier to manage multiple submodules in a repo. It was extracted from [socialnews/app](https://github.com/socialnews/app) which is a useful reference.

## Installation
```
npm i gulp-git-submodule --save-dev
```

The package comes with some convenience tasks which you can load into your gulpfile with
```
#gulpfile.js
var gulp = require('gulp')
var submodule = require('gulp-git-submodule')

submodule.registerTasks(gulp)
```

Note: this package assumes you keep your submodule config in .gitmodules and that each submodule is in the root directory of your app.

## Usage
```
gulp -T #will show you all the tasks

gulp sm:install 
#runs `git submodule update --init --recursive`

gulp sm:exec -c pwd 
#runs `pwd` in each submodule

gulp sm:list 
#lists all the submodules

gulp sm:update 
#pulls from origin for each submodule and switches to default branch
```

All the commands take some flags for controlling which submodules are operated on

```
gulp <sm:command> -h [--help] 
#show help for this command

gulp <sm:command> -o <submodule> --only <submodule> 
#only operate on the listed submodules

gulp <sm:command> -e <submodule> --except <submodule> 
#skip these submodules for the operation
```

Note that the -o and -e flags can be chained so gulp `sm:list -e module1 -e module2` will do what you expect it to.




