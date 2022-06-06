const shell = require('shelljs')
/**
 * 运行开发环境
 */
//const echoBgRed = word => shell.echo(`\x1B[31m\x1B[43m\x1B[1m${word}\x1B[0m`)
const echoYello = word => shell.echo(`\x1B[33m\x1B[1m${word}\x1B[0m`)

shell.exec('cd ../')

echoYello('🚗💻 start run ...')

shell.exec('webpack server --mode development')