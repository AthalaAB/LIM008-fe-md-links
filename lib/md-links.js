"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("./module/path");

var _validate = require("./module/validate");

// const mdLinks = require("md-links");
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
}; // mdLinks('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds')
// .then(res => console.log(res));


exports.mdLinks = mdLinks;