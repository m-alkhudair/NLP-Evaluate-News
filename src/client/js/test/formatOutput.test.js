import {formatOutput} from '../formatOutput';

test('formatOutput is a function that should format the values it receives from MeaningCloud API', ()=>{
    expect(formatOutput('P+')).toEqual('strongly positive');
})
