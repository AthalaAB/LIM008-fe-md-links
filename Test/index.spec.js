import { pathToBeAbsolute, relativeToAbsolute, pathIsDirectory, pathIsFile, contentFiles, getLinks } from "../src/module/path";
import { validateLinks } from "../src/module/validate";
import { statsOfLinks } from "../src/module/stats";

const arrRoutesMD = [
  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md',
  'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md'
];

const objLinks = [ { href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
{ href: 'https://nodvgbhjejs.org/dfghj',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
{ href: 'https://semver.org/hhh',
text: 'Semver',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
{ href: 'https://nodejs.org/en/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
{ href: 'https://nodejs.org/en/',
text: 'File System',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
{ href: 'https://daringfireball.net/projects/markdown/syntax',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
{ href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md' },
{ href: 'https://nodejs.org/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md' },
{ href: 'https://semver.org/',
text: 'Semver',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md' },
{ href: 'https://nodejs.org/en/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md' },
{ href: 'https://nodejs.org/api/fs.html',
text: 'File System',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md' },
{ href: 'https://daringfireball.net/projects/markdown/syntax',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md' },
{ href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md' },
{ href: 'https://nodejs.org/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md' },
{ href: 'https://semver.org/',
text: 'Semver',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md' },
{ href: 'https://nodejs.org/en/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md' },
{ href: 'https://nodejs.org/api/fs.html',
text: 'File System',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md' },
{ href: 'https://daringfireball.net/projects/markdown/syntax',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md' } ];

const linksWithStatus = [ { href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
status: 200,
message: 'OK' },
{ href: 'https://nodvgbhjejs.org/dfghj',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
status: '',
message: 'Not Found' },
{ href: 'https://semver.org/hhh',
text: 'Semver',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
status: 404,
message: 'Fail' },
{ href: 'https://nodejs.org/en/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
status: 200,
message: 'OK' },
{ href: 'https://nodejs.org/en/',
text: 'File System',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
status: 200,
message: 'OK' },
{ href: 'https://daringfireball.net/projects/markdown/syntax',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
status: 200,
message: 'OK' } ];

const objWithStats = { Total: 6, Unicos: 5 };



describe('pathToBeAbsolute', () => {
    it('deberia retorar true', () => {
        expect(pathToBeAbsolute('/test/demo_path.js')).toBe(true);
    });
});

describe('pathToBeAbsolute', () => {
    it('deberia retornar false', () => {
        expect(pathToBeAbsolute('test/demo_path.js')).toBe(false);
    });
});

describe('relativeToAbsolute', () => {
    it('deberia retornar ruta absoluta', () => {
        expect(relativeToAbsolute('test/demo_path.js')).toBe('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\test\\demo_path.js');
    });
});

describe('pathIsDirectory', () => {
    it ('deberia retornar true', () => {
    expect(pathIsDirectory('.\\test')).toBe(true);
    });
});

describe('pathIsFile', () => {
    it ('deberia retornar true', () => {
    expect(pathIsFile('Test\\prueba.js')).toEqual(true);
    });
});

describe('contentFiles', () => {
    it('debería retornar un array con todas las rutas MD', () => {
    expect(contentFiles('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md')).toEqual( ['C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md']);
    });
    it('debería retornar un array con todas las rutas MD', () => {
        expect(contentFiles('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds')).toEqual(arrRoutesMD);
        });
});

describe('getLinks', () => {
    it('debería retornar un array de objetos contenniendo: href, text y file', () => {
    expect(getLinks(arrRoutesMD)).toEqual(objLinks);
    });
});

describe('validateLinks', () => {
    it.only('debería devolver el array de objetos con los links y su status y statusText ', (done) => {
    validateLinks(objLinks).then((result) => { 
        expect (result).toEqual(linksWithStatus); 
        done();
});
});
});

describe('stats', () => {
  it('debería retornar el número de links totales y únicos', () => {
  expect(statsOfLinks(linksWithStatus)).toEqual(objWithStats);
  });
});