async function fetchdata() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=toronto&minDate=2024-08-01&maxDate=2024-09-01&page=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9c5a7fe85cmsh27a70a8beda098cp1b68aajsn30db89fc718e',
            'x-rapidapi-host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('records', result);

        document.getElementById("map").innerHTML = result.data.map( item => `<li> ${item.name} </li>`).join();
    } catch (error) {
        console.error(error);
    }
}
fetchdata();

