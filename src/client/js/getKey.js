const getKey = async ()=>{
    const response = await fetch('http://localhost:3333/key');
    try {
        const jsonResponse = await response.json();
        return jsonResponse.applicationKey;
    } catch(error) {
        console.log('error', error);
    }
}

export { getKey }