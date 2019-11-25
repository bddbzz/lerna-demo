'use strict';
const chalk = require("chalk")
const lernaModule2 = require("@monkeyzz/lerna-module-2")

module.exports = lernaModule1;

function lernaModule1() {
    console.log(chalk.green("module1"))
    lernaModule2()
}
lernaModule1()

