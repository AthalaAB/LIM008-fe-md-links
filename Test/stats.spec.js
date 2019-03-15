import { statsOfLinks, linksBroken } from "../src/module/stats.js";

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
message: 'OK' } ];

describe('statsOfLinks', () => {
    it('debería retornar el número de links totales y únicos', (done) => {
    statsOfLinks(linksWithStatus).then((result) => {
      expect(result).toEqual('Total: 6 Unique: 5' );
      done();
      });
    });
  });
  
  describe('statsOfLinks', () => {
      it('debería retornar el número de links totales y únicos', (done) => {
      linksBroken(linksWithStatus).then((result) => {
        expect(result).toEqual('Broken: 1' );
        done();
        });
      });
    });