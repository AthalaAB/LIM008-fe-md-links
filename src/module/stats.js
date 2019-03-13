export const statsOfLinks = (arrObjLinks) => {
     const allLinks = arrObjLinks.length;
    let linksUniques = [];
    arrObjLinks.map (link => {
        if (linksUniques.indexOf(link.href) === -1 ){
            linksUniques.push(link.href)
        }
    });
        const uniques = linksUniques.length;
        const stats = { Total: allLinks,
                       Unicos: uniques };
        return stats;
   };

// export const linksBroken = () => {
    
// }


// console.log(statsOfLinks([ { href: 'https://es.wikipedia.org/wiki/Markdown',
// text: 'Markdown',
// file:
//  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
// { href: 'https://nodvgbhjejs.org/dfghj',
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
//  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' }]));


  

