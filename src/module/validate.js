const fetch = require('node-fetch');

export const validateLinks = (arrayObjLinks) => { 
    const roveArrObj = arrayObjLinks.map((links) => {
        return new Promise ((resolve, reject)=>{
         fetch(links.href)
           .then(res => {
             if (res.status >= 200 && res.status < 400) {
               links.status = res.status;
               links.message = 'OK';
               resolve(links);
             } else {
               links.status = res.status;
               links.message = 'Fail'; 
               resolve(links);
             }
           }).catch(error => {
            links.status = '';
            links.message = 'Not Found'; 
            resolve(links);
           });
       });
   });
   return Promise.all(roveArrObj);
   };
   
  //  validateLinks(getLinks(contentFiles('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md'))).then(res => console.log(res));

