console.log("Let's get this party started!");


// Get elements from the DOM
const form = document.querySelector('#search-form');
const gifContainer = document.querySelector('#gifContainer');
const removeBtn = document.querySelector('#removeBtn');

// API key and base URL
const apiKey = 'JRaqae46NxS1YqviGaDTg3idG185GEgV';
const baseURL = 'http://api.giphy.com/v1/gifs/search';

// Handle form submission
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    // Get the search term
    const searchTerm = document.querySelector('#search-term').value;
    
    // Make a request to Giphy API using axios
    const res = await axios.get(`${baseURL}?q=${searchTerm}&api_key=${apiKey}&limit=1`);
    
    // Log response data to confirm
    console.log(res.data);


  // If a GIF is found, append it to the page
    if (res.data.data.length > 0) {
        const gifUrl = res.data.data[0].images.original.url;
        const img = document.createElement('img');
        img.src = gifUrl;
        gifContainer.appendChild(img);
      }
      
       
  // Clear the search term
  document.querySelector('#search-term').value = '';
});

// Handle removing all GIFs
removeBtn.addEventListener('click', function () {
  gifContainer.innerHTML = '';
});


