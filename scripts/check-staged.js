const cp = require('child_process')
const chalk = require('chalk')

cp.exec('git diff ./dist', (err, stdout) => {
  if (err) {
    return process.exit(1)
  } else if (stdout.toString().length) {
    console.log(chalk.red('ERROR:'), 'There are unstaged changes in ./dist. Make sure you have added the built code.')
    return process.exit(1)
  }
  process.exit()
})
