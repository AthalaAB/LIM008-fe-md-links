import { pathToBeAbsolute, relativeToAbsolute, pathIsDirectory, pathIsFile, contentFiles, getLinks } from "./module/path";
import { validateLinks } from "./module/validate";
import { stats } from "./module/stats";

const mdLinks = require("md-links");

const  controllerMdLinks = ( path, options) =>{
  const promesa = new Promise ((resolve, reject)=>{
    const validate = validateLinks();
    
    


  })

};

// mdLinks("./some/example.md")
//   .then(links => {
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);

// mdLinks("./some/example.md", { validateLinks: true })
//   .then(links => {
//     // => [{ href, text, file, status, ok }]
//   })
//   .catch(console.error);

// mdLinks("./some/dir")
//   .then(links => {
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);