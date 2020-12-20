
// Paste API key here when using webpack dev-server!
// const apiKey = '';

const postDataToMeaningCloud = async ()=> {

    const apiKey = await Client.getKey(); // When using webpack dev-server comment out this line


    let formText = document.getElementById('text-to-analyze').value

    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${formText}&lang=auto`;

    const response = await fetch(url);
    try {
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch(error) {
        console.log('error', error);
    }
}

export { postDataToMeaningCloud }