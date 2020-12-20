import {postDataToMeaningCloud} from '../postDataToMeaningCloud'

//it should return a response from the MeaningCloud
test('postDataToMeaningCloud should send a response from the API', ()=> {
    expect(typeof postDataToMeaningCloud()).toEqual('object');
})