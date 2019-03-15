#!/usr/bin/env node
"use strict";

var _stats = require("./module/stats.js");

var _mdLinks = require("./md-links.js");

const path = process.argv[2];
const oneOption = process.argv[3];
const twoOption = process.argv[4];

if (oneOption === '--validate' && twoOption === '--stats' || oneOption === '--stats' && twoOption === '--validate') {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(res => {
    (0, _stats.statsOfLinks)(res).then(res => console.log(res));
    (0, _stats.linksBroken)(res).then(res => console.log(res));
  });
} else if (oneOption === '--validate' || oneOption === '--v') {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(res => {
    res.forEach(objLinks => {
      console.log(`file: ${objLinks.file}, \nhref: ${objLinks.href}, \nmessage:${objLinks.message}, \nstatus:${objLinks.status}, \ntext:${objLinks.text}`);
    });
  }).catch(error => console.log(error));
} else if (oneOption === '--stats' || oneOption === '--s') {
  (0, _mdLinks.mdLinks)(path, {
    validate: false
  }).then(res => {
    (0, _stats.statsOfLinks)(res).then(res => console.log(res));
  });
} else {
  (0, _mdLinks.mdLinks)(path, {
    validate: false
  }).then(res => {
    res.forEach(objLinks => {
      console.log(`file: ${objLinks.file}, \nhref: ${objLinks.href}, \ntext:${objLinks.text}`);
    });
  });
}