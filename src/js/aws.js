import {simpleForm} from './domloader';

simpleForm.onsubmit = e => {
    
  // Stop the form submission from trying to go to a new page.
    e.preventDefault();
    // Prepare data to send to the API.
    let p = document.getElementById("box");
    let message = document.getElementById("message"); 
   
    const data = message.value;
    
    // Log what our lambda function will receive
    console.log(JSON.stringify(data, null, 2));
    // Fetch from the API!
    fetch(simpleForm.action, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
        //'x-api-key': 'X97BA3TejWOHtwUqxn3E8Z6vt9fPPi5rQ4c6jg70'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data, null, 2)
    })
      .then(response => {
        // If we get a bad response from the API, throw an error.
        // We'll catch it at the bottom of the promise chain.
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Invalid URL");
        };
        // Parse JSON.
        return response.json();
      })
      .then(json => {
        // Add successful responses to the links element.
        console.log(json);
        p.innerHTML = json; 
      }).catch(error => {
        // Alert upon failure.
        alert(error.message);
      });
  };