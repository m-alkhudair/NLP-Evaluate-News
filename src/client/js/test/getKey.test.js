import {getKey} from '../getKey';

test('getKey is a function that should return a response object from the express server', ()=>{
    expect(getKey()).toBeDefined();
})
