const path = require('path');
const fs = require('fs');
const marked = require('marked');


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

  export const getLinks = (arrayRoutesMD) => {
    let arrayObjLinks = [];
    arrayRoutesMD.forEach((routeMD) => {
        const readFiles =  fs.readFileSync(routeMD, 'utf8');
        const renderer = new marked.Renderer(); 
        renderer.link = (href, title, text) => {
            arrayObjLinks.push({ href, text, file: routeMD }); 
            return ''; 
      }
      marked(readFiles, {renderer}); 
    })
    return arrayObjLinks;
};

// console.log(getLinks([
//     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
//     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md',
//     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md'
// ]));

//  const getLinks = (routeMD) => {
//     const readFiles =  fs.readFileSync(routeMD, 'utf8');
//     let arrayObjLinks = [];
//     const renderer = new marked.Renderer(); 
//     renderer.link = (href, title, text) => {
//         arrayObjLinks.push({ href, text, file: routeMD }); 
//         return ''; 
//     }; 
//     marked(readFiles, {renderer}); 
//     return arrayObjLinks;
// };