import {
  pathToBeAbsolute,
  relativeToAbsolute,
  contentFiles,
  getLinks
} from "./module/path";
import {
  validateLinks
} from "./module/validate";

// const mdLinks = require("md-links");


export const mdLinks = (path, options) => {

  let pathAbs;
  if (!pathToBeAbsolute(path)) {
    pathAbs = relativeToAbsolute(path);
  } else {
    pathAbs = path;
  };
  return new Promise((resolve) => {
    if (options === undefined) {
      resolve(getLinks(contentFiles(pathAbs)));
    } if (options.validate) {
      resolve(validateLinks(getLinks(contentFiles(pathAbs))));
    } 
  })
}

// mdLinks('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds')
// .then(res => console.log(res));
