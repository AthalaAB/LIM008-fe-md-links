import { mdLinks } from "../src/md-links.js";

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

const linksWithStatus = [ { href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 `${process.cwd()}\\test\\mds\\dir1\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://nodvgbhjejs.org/dfghj',
text: 'Node.js',
file:
 `${process.cwd()}\\test\\mds\\dir1\\readme.md`,
status: '',
message: 'Not Found' },
{ href: 'https://semver.org/hhh',
text: 'Semver',
file:
 `${process.cwd()}\\test\\mds\\dir1\\readme.md`,
status: 404,
message: 'Fail' },
{ href: 'https://nodejs.org/en/',
text: 'Node.js',
file:
 `${process.cwd()}\\test\\mds\\dir1\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://nodejs.org/en/',
text: 'File System',
file:
 `${process.cwd()}\\test\\mds\\dir1\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://daringfireball.net/projects/markdown/syntax',
text: 'Markdown',
file:
 `${process.cwd()}\\test\\mds\\dir1\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 `${process.cwd()}\\test\\mds\\dir2\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://nodejs.org/',
text: 'Node.js',
file:
 `${process.cwd()}\\test\\mds\\dir2\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://semver.org/',
text: 'Semver',
file:
 `${process.cwd()}\\test\\mds\\dir2\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://nodejs.org/en/',
text: 'Node.js',
file:
 `${process.cwd()}\\test\\mds\\dir2\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://nodejs.org/api/fs.html',
text: 'File System',
file:
 `${process.cwd()}\\test\\mds\\dir2\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://daringfireball.net/projects/markdown/syntax',
text: 'Markdown',
file:
 `${process.cwd()}\\test\\mds\\dir2\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 `${process.cwd()}\\test\\mds\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://nodejs.org/',
text: 'Node.js',
file:
 `${process.cwd()}\\test\\mds\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://semver.org/',
text: 'Semver',
file:
 `${process.cwd()}\\test\\mds\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://nodejs.org/en/',
text: 'Node.js',
file:
 `${process.cwd()}\\test\\mds\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://nodejs.org/api/fs.html',
text: 'File System',
file:
 `${process.cwd()}\\test\\mds\\readme.md`,
status: 200,
message: 'OK' },
{ href: 'https://daringfireball.net/projects/markdown/syntax',
text: 'Markdown',
file:
 `${process.cwd()}\\test\\mds\\readme.md`,
status: 200,
message: 'OK' } ];



describe('mdLinks', () =>{
it('al ingresar una ruta deberia retornar una promesa que resuelva a un array de objetos, donde cada objeto representa un link y contiene las siguientes propiedades:href,text,file', (done) => {
    mdLinks(`${process.cwd()}\\test\\mds`).then((result) => {
      expect(result).toEqual(objLinks);
      done();
    });
  });
  it('al ingresar una ruta deberia retornar una promesa que resuelva a un array de objetos, donde cada objeto representa un link y contiene las siguientes propiedades:href,text,file', (done) => {
    mdLinks('test\\mds').then((result) => {
      expect(result).toEqual(objLinks);
      done();
    });
  });
  it('retorna una promesa que resuelva a un array de objetos que contengan propiedades ya la opcion de validate', (done) => {
    mdLinks(`${process.cwd()}\\test\\mds`, {validate: true}).then((result) => {
      expect(result).toEqual(linksWithStatus);
      done();
    });
  });
it('retorna una promesa que resuelva a un array de objetos que contengan propiedades ya la opcion de validate', (done) => {
    mdLinks('test\\mds', {validate: true}).then((result) => {
      expect(result).toEqual(linksWithStatus);
      done();
    });
  });
});