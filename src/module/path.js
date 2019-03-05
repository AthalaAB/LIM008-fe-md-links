const path = require('path');
const fs = require('fs');
const myMarked = require('marked');


export const pathToBeAbsolute = (pathToEvaluate) => {           //booleano
    return path.isAbsolute(pathToEvaluate) 
}

export const relativeToAbsolute = (pathRelative) => {       
    return path.resolve(pathRelative)
}

export const pathIsDirectory = (pathToEvaluate) => {
    return fs.lstatSync(pathToEvaluate).isDirectory();
 }

 export const pathIsFile = (pathToEvaluate) => {
    return fs.lstatSync(pathToEvaluate).isFile();
 };

 export const fileIsMD = (route) => {
    return path.extname(route) === '.md';
 }

 export const contentFiles = (route) => {
    let contentFileMD = [];
     if (pathIsFile(route)) {
        if (fileIsMD(route)){
            contentFileMD.push(route)
        }
     } if (pathIsDirectory(route)){
        let files = fs.readdirSync(route);   //trae el nombre de cada uno de los que está dentro del directorio
        files.forEach((name) => {
            contentFileMD = contentFileMD.concat(contentFiles(path.join(route, name)));
        })
     }
     return contentFileMD;
  };

export const getLinks = (arrFiles) => {
    let arrObjLinks = [];
    arrFiles.forEach((file) => {
        fs.readFile(file, (err, data) => {
            const renderer = new myMarked.Renderer();
        })
    })
    return arrObjLinks;
};
