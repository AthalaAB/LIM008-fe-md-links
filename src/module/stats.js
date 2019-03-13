import {
    validateLinks
  } from "../module/validate";

 export const statsOfLinks = (arrObjLinks) => {
     const validate = validateLinks(arrObjLinks);
     return new Promise ((resolve)=>{
        validate.then((links)=>{
            const allLinks = links.length;
        const linksUniques = [...new Set(links.map(links => links.href))].length;
        resolve(`Total: ${allLinks} Unique: ${linksUniques}`);
     })
   })
};

export const linksBroken = (arrObjLinks) => {
    const validate = validateLinks(arrObjLinks);
    return new Promise ((resolve)=>{
       validate.then((link)=>{
       const getBroken = link.filter(links => links.message === 'Fail');
       const brokens = getBroken.length;
       resolve(`Broken: ${brokens}`);
    })
  })
};


// statsOfLinks([ { href: 'https://es.wikipedia.org/wiki/Markdown',
// text: 'Markdown',
// file:
//  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
// { href: 'https://nodejs.org/dfghj',
// text: 'Node.js',
// file:
//  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
// { href: 'https://es.wikipedia.org/wiki/Markdown',
// text: 'Semver',
// file:
//  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
// { href: 'https://nodejs.org/en/',
// text: 'Node.js',
// file:
//  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' }]).then(result => console.log(result));

 
//  linksBroken([ { href: 'https://es.wikipedia.org/wiki/Markdown',
//  text: 'Markdown',
//  file:
//   'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
//  { href: 'https://nodejs.org/dfghj',
//  text: 'Node.js',
//  file:
//   'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
//  { href: 'https://es.wikipedia.org/wiki/Markdown',
//  text: 'Semver',
//  file:
//   'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
//  { href: 'https://nodejs.org/en/',
//  text: 'Node.js',
//  file:
//   'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' }]).then(result => console.log(result)); 


  

