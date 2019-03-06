import { pathToBeAbsolute, relativeToAbsolute, pathIsDirectory, pathIsFile, contentFiles, getLinks } from "../src/module/path";


describe('pathToBeAbsolute', () => {
    it('deberia ser una funcion', () => {
        expect(typeof pathToBeAbsolute).toBe('function');
    });
});

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
    it('deberia ser una funcion', () => {
        expect(typeof relativeToAbsolute).toBe('function');
    });
});

describe('relativeToAbsolute', () => {
    it('deberia retornar ruta absoluta', () => {
        expect(relativeToAbsolute('test/demo_path.js')).toBe('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\test\\demo_path.js');
    });
});

describe('pathIsDirectory', () => {
    it('deberia ser una funcion', () => {
        expect(typeof pathIsDirectory).toBe('function');
    });
});

describe('pathIsDirectory', () => {
    it ('deberia retornar true', () => {
    expect(pathIsDirectory('.\\test')).toBe(true);
    });
});

describe('pathIsFile', () => {
    it('deberia ser una funcion', () => {
        expect(typeof pathIsFile).toBe('function');
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
        expect(contentFiles('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds')).toEqual([
            'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md',
            'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir2\\readme.md',
            'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\readme.md'
        ]);
        });
});

describe('getLinks', () => {
    it('debería retornar un array de objetos contenniendo: href, text y file', () => {
    expect(getLinks('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md')).toEqual( 
        [ { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
  { href: 'https://semver.org/',
    text: 'Semver',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
  { href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
  { href: 'https://nodejs.org/api/fs.html',
    text: 'File System',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' },
  { href: 'https://daringfireball.net/projects/markdown/syntax',
    text: 'Markdown',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds\\dir1\\readme.md' } ]
        );
    });
});