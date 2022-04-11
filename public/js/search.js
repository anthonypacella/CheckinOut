const searchFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the form
    const isbn = document.querySelector('#isbn').value.trim();
  
    if (isbn) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({ isbn }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the isbn page
        window.location.replace(`/api/books/${isbn}`);
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document
    .querySelector('.search-form')
    .addEventListener('submit', searchFormHandler);
  