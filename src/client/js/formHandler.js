function handleSubmit(event) {
    event.preventDefault();

    const input_url = document.querySelectorAll('input[name=test-url]')

    if (Client.validURL(JSON.parse(JSON.stringify(input_url[0].value)))) {
        console.log("::: FORM INPUT VALID :::");
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: input_url[0].value })
        };
        fetch('http://localhost:3000/article', requestOptions)
            .then(response => response.json())
            .then((data) => {
                // Populate html with result
                document.querySelector('section.url-results #polarity').innerHTML = data.polarity
                document.querySelector('section.url-results #subjectivity').innerHTML = data.subjectivity
                document.querySelector('section.url-results #polarity_confidence').innerHTML = data.polarity_confidence
                document.querySelector('section.url-results #subjectivity_confidence').innerHTML = data.subjectivity_confidence
                document.querySelector('section.url-results #excerpt').innerHTML = data.text
            })

    } else {
        // Display error message if URL is not valide
        var error_section = document.querySelector('section.errors');
        var error = document.querySelector('section.errors #error');
        error.innerHTML = "The URL:[" + JSON.stringify(input_url[0].value) + "] is not valide. Please enter a valid url"
        error_section.style.display = "block";
    }
}

export { handleSubmit };