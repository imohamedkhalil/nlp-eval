


function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('name').value;
    
    Client.checkForName(formText);
    
    
    
    // check what text was put into the form field

    console.log("::: Form Submitted :::");
    fetch('/add', {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity;
    })
}

export { handleSubmit }
