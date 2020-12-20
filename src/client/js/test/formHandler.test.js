import {handleSubmit} from '../formHandler';

test('handleSubmit should return a response object from the MeaningCloud API', ()=> {
    expect(typeof handleSubmit()).toEqual('object');
})