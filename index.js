#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");

welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: "#fadc00",
  color: "#000",
  bold: true,
  clear: true,
});

console.log(
  `
  ${chalk.bgBlue.bold(` Rishabh Das `)}

  ${chalk.italic(
    `I am a ${chalk.red.bold(
      "Digital entrepreneur"
    )}, making the internet a better place one commit at a time`
  )}
  `
);
