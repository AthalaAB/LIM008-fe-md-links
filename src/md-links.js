import {
  pathToBeAbsolute,
  relativeToAbsolute,
  pathIsDirectory,
  pathIsFile,
  contentFiles,
  getLinks
} from "./module/path";
import {
  validateLinks
} from "./module/validate";
import {
  stats
} from "./module/stats";

// const mdLinks = require("md-links");

const options = {
  validate : true 
}

const mdLinks = (path, options) => {

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


mdLinks('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds')
.then(res => console.log(res));
