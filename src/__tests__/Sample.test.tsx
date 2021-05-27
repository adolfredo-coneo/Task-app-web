import { render, screen } from '@testing-library/react';
import App from '../App';

describe('A Suite is just a function', () =>{
    let a: boolean;
    let b: string;

    it('ans o is a spec', ()=>{
        a = true;

        expect(a).toBe(true);
    });

    test('either a test or it can be used', ()=>{
        a = false;
        b = 'Some string';

        expect(b).toContain('me');
    });

    test('it should only really be one expect call but more can be made', ()=>{
        expect(a).toBeTruthy();
        expect(b).not.toBeFalsy();
    });
});