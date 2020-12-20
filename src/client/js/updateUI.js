
const updateUI = (data) => {

    console.log(data);

    //Checks of inputted text is valid English
    if (data.status.msg!=='OK') {
        document.getElementById('results').innerHTML = 'Please enter valid sentences. Sentences should be complete and comprehensive.';
        document.getElementById('results').setAttribute('style', 'color:red;');
        
    } else {

        if (data.sentence_list.length<=1) {
            document.getElementById('results').innerHTML = `The overall text was ${(Client.formatOutput(data.score_tag)).toUpperCase()}. The text was ${data.subjectivity}, with a confidence score of ${data.confidence}/100.`;
        } else {
            document.getElementById('results').innerHTML = `The overall text was ${(Client.formatOutput(data.score_tag)).toUpperCase()}. There was ${data.agreement} with regards to the sentiment between the different elements in the text. The text was ${data.subjectivity}, with a confidence score of ${data.confidence}/100.`;
        }
        
    }
}

export { updateUI }