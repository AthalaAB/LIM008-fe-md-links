"use strict";

var _path = require("./module/path");

var _validate = require("./module/validate");

var _stats = require("./module/stats");

// const mdLinks = require("md-links");
const options = {
  validate: true
};

const mdLinks = (path, options) => {
  let pathAbs;

  if (!(0, _path.pathToBeAbsolute)(path)) {
    pathAbs = (0, _path.relativeToAbsolute)(path);
  } else {
    pathAbs = path;
  }

  ;
  return new Promise(resolve => {
    if (options === undefined) {
      resolve((0, _path.getLinks)((0, _path.contentFiles)(pathAbs)));
    }

    if (options.validate) {
      resolve((0, _validate.validateLinks)((0, _path.getLinks)((0, _path.contentFiles)(pathAbs))));
    }
  });
};

mdLinks('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds').then(res => console.log(res));