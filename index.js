#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: "#fadc00",
  color: "#000",
  bold: true,
  clear: false,
});

console.log(
  `Hi Rishabh (aka "up16") here 👋!! Thanks for trying out up16-cli. Meow`
);
