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

// export const validateLinks = (arrayObjLinks) => {
//    const newArrLink = [];
//     arrayObjLinks.forEach((objLink) => {
//         fetch(objLink.href)
//         .then( function(response){
//             if (response.status !== 200){
//                 const status = response.status;
//             }
//         })

//     })
//     return newArrLink;
// };

export const validateLinks = (arrayObjLinks) => {
   const newArrLink = [];
    arrayObjLinks.forEach((objLink) => {
        http.get(objLink.href , (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
                            `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
            error = new Error('Invalid content-type.\n' +
                            `Expected application/json but received ${contentType}`);
        }
        if (error) {
            console.error(error.message);
            // consume response data to free up memory
            res.resume();
            return;
        }
    })
    })
    return newArrLink;
};

 
// fetch('./api/some.json')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });

