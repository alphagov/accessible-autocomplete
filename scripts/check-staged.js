const cp = require('child_process')
const chalk = require('chalk')

cp.exec('git diff --name-only dist/', (err, stdout) => {
  if (err) {
    console.log(chalk.red('ERROR:'), err)
    return process.exit(1)
  }
  if (stdout.toString().length) {
    console.log(chalk.red('ERROR:'), 'There are unstaged changes in `dist/` after running `npm run build`. Please commit them.')
    return process.exit(1)
  }
  process.exit()
})
