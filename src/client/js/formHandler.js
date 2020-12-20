

async function handleSubmit(event) {
    event.preventDefault()

    //To reset the HTML
    document.getElementById('results').innerHTML = '';    
    document.getElementById('results').setAttribute('style', 'color:#545454;');
    document.getElementById('text-to-analyze').setAttribute('style', 'border: inherit;');

    let formText = document.getElementById('text-to-analyze').value

    //Form validation
    if (!formText.match(/\w/)) {
        document.getElementById('text-to-analyze').setAttribute('style', 'border: 1px solid red;')
        alert('Please enter a text.');
        return false;
    }

    Client.postDataToMeaningCloud()
    .then(data => Client.updateUI(data))
    .catch(error=> {
        console.log('error', error);
        alert('SERVER Connection Lost.');
    })
 
}

export { handleSubmit }
