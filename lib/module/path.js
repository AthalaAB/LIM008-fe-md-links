"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinks = exports.contentFiles = exports.fileIsMD = exports.pathIsFile = exports.pathIsDirectory = exports.relativeToAbsolute = exports.pathToBeAbsolute = void 0;

const path = require('path');

const fs = require('fs');

const marked = require('marked');

const pathToBeAbsolute = pathToEvaluate => {
  //booleano
  return path.isAbsolute(pathToEvaluate);
};

exports.pathToBeAbsolute = pathToBeAbsolute;

const relativeToAbsolute = pathRelative => {
  return path.resolve(pathRelative);
};

exports.relativeToAbsolute = relativeToAbsolute;

const pathIsDirectory = pathToEvaluate => {
  return fs.lstatSync(pathToEvaluate).isDirectory();
};

exports.pathIsDirectory = pathIsDirectory;

const pathIsFile = pathToEvaluate => {
  return fs.lstatSync(pathToEvaluate).isFile();
};

exports.pathIsFile = pathIsFile;

const fileIsMD = route => {
  return path.extname(route) === '.md';
};

exports.fileIsMD = fileIsMD;

const contentFiles = route => {
  let contentFileMD = [];

  if (pathIsFile(route)) {
    if (fileIsMD(route)) {
      contentFileMD.push(route);
    }
  }

  if (pathIsDirectory(route)) {
    let files = fs.readdirSync(route); //trae el nombre de cada uno de los que está dentro del directorio

    files.forEach(name => {
      contentFileMD = contentFileMD.concat(contentFiles(path.join(route, name)));
    });
  }

  return contentFileMD;
};

exports.contentFiles = contentFiles;

const getLinks = arrayRoutesMD => {
  let arrayObjLinks = [];
  arrayRoutesMD.forEach(routeMD => {
    const readFiles = fs.readFileSync(routeMD, 'utf8');
    const renderer = new marked.Renderer();

    renderer.link = (href, __, text) => {
      arrayObjLinks.push({
        href,
        text,
        file: routeMD
      });
      return '';
    };

    marked(readFiles, {
      renderer
    });
  });
  return arrayObjLinks;
};

exports.getLinks = getLinks;