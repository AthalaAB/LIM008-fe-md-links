import { validateLinks } from "../src/module/validate.js";

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
`${process.cwd()}\\test\\mds\\dir1\\readme.md` }];

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
message: 'Fail' }];

describe('validateLinks', () => {
    it('debería devolver el array de objetos con los links y su status y statusText ', (done) => {
    validateLinks(objLinks).then((result) => { 
        expect (result).toEqual(linksWithStatus); 
        done();
    });
  });
});