import { pathToBeAbsolute, relativeToAbsolute, pathIsDirectory, pathIsFile } from "../src/module/path";


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