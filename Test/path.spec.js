import { pathToBeAbsolute, relativeToAbsolute, pathIsDirectory, pathIsFile, contentFiles, getLinks } from "../src/module/path.js";

const arrRoutesMD = [
    `${process.cwd()}\\test\\mds\\dir1\\readme.md`,
    `${process.cwd()}\\test\\mds\\dir2\\readme.md`,
    `${process.cwd()}\\test\\mds\\readme.md`
  ];
  
  const objLinks = [ { href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
  `${process.cwd()}\\test\\mds\\dir1\\readme.md` },
  { href: 'https://nodvgbhjejs.org/dfghj',
  text: 'Node.js',
  file:
  `${process.cwd()}\\test\\mds\\dir1\\readme.md` },
  { href: 'https://semver.org/hhh',
  text: 'Semver',
  file:
  `${process.cwd()}\\test\\mds\\dir1\\readme.md` },
  { href: 'https://nodejs.org/en/',
  text: 'Node.js',
  file:
  `${process.cwd()}\\test\\mds\\dir1\\readme.md` },
  { href: 'https://nodejs.org/en/',
  text: 'File System',
  file:
  `${process.cwd()}\\test\\mds\\dir1\\readme.md` },
  { href: 'https://daringfireball.net/projects/markdown/syntax',
  text: 'Markdown',
  file:
  `${process.cwd()}\\test\\mds\\dir1\\readme.md` },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
  `${process.cwd()}\\test\\mds\\dir2\\readme.md` },
  { href: 'https://nodejs.org/',
  text: 'Node.js',
  file:
  `${process.cwd()}\\test\\mds\\dir2\\readme.md` },
  { href: 'https://semver.org/',
  text: 'Semver',
  file:
  `${process.cwd()}\\test\\mds\\dir2\\readme.md` },
  { href: 'https://nodejs.org/en/',
  text: 'Node.js',
  file:
  `${process.cwd()}\\test\\mds\\dir2\\readme.md` },
  { href: 'https://nodejs.org/api/fs.html',
  text: 'File System',
  file:
  `${process.cwd()}\\test\\mds\\dir2\\readme.md` },
  { href: 'https://daringfireball.net/projects/markdown/syntax',
  text: 'Markdown',
  file:
  `${process.cwd()}\\test\\mds\\dir2\\readme.md` },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
  `${process.cwd()}\\test\\mds\\readme.md` },
  { href: 'https://nodejs.org/',
  text: 'Node.js',
  file:
  `${process.cwd()}\\test\\mds\\readme.md` },
  { href: 'https://semver.org/',
  text: 'Semver',
  file:
  `${process.cwd()}\\test\\mds\\readme.md` },
  { href: 'https://nodejs.org/en/',
  text: 'Node.js',
  file:
  `${process.cwd()}\\test\\mds\\readme.md` },
  { href: 'https://nodejs.org/api/fs.html',
  text: 'File System',
  file:
  `${process.cwd()}\\test\\mds\\readme.md` },
  { href: 'https://daringfireball.net/projects/markdown/syntax',
  text: 'Markdown',
  file:
  `${process.cwd()}\\test\\mds\\readme.md` } ];

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
        expect(relativeToAbsolute('test/demo_path.js')).toBe(`${process.cwd()}\\test\\demo_path.js`);
    });
});

describe('pathIsDirectory', () => {
    it ('deberia retornar true', () => {
    expect(pathIsDirectory('.\\test')).toBe(true);
    });
});

describe('pathIsFile', () => {
    it ('deberia retornar true', () => {
    expect(pathIsFile('test\\prueba.js')).toEqual(true);
    });
});

describe('contentFiles', () => {
    it('debería retornar un array con todas las rutas MD', () => {
        expect(contentFiles(`${process.cwd()}\\test\\mds`)).toEqual(arrRoutesMD);
        });
});

describe('getLinks', () => {
    it('debería retornar un array de objetos contenniendo: href, text y file', () => {
    expect(getLinks(arrRoutesMD)).toEqual(objLinks);
    });
});