import {checkForName} from './client/js/nameChecker';

describe('Test, the function checkForName() should exist', ()=>{
    test('It should return true', ()=>{
        expect(checkForName).toBeDefined();
    });
});

describe('Test, the function checkForName() should be a function', ()=>{
    test('It should be a function', ()=>{
        expect(typeof checkForName).toBe('function');
    });
});
