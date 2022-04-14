
const printBook = async () => {

    console.log(this.document.URL.split("/").pop());
    const isbn = this.document.URL.split("/").pop();
    
    // const isbn = document.querySelector('#isbn').value.trim();
    // console.log(`input isbn is ${isbn}`);
    // if (isbn) {
    //   // Send a POST request to the API endpoint
    //   const response = await fetch('/api/search', {
    //     method: 'POST',
    //     body: JSON.stringify({ isbn }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     // If successful, redirect the browser to the isbn page
    //     window.location.href = `/api/books/${isbn}`;
    //   } else {
    //     alert(response.statusText);
    //   }
    // }
};
  

printBook();
  