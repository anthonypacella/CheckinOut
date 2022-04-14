const searchFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the form
  const isbn = document.querySelector('#isbn').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const author = document.querySelector('#author').value.trim();
  const title = document.querySelector('#title').value.trim().toLowerCase();

  
    // Send a POST request to the API endpoint
  const response = await fetch('/api/search', {
    method: 'POST',
    body: JSON.stringify({ isbn, subject, author, title }),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(`isbn`, isbn);
  console.log(`subject`, subject);
  console.log(`author`, author);

  const pathHead = ['/api/books'];
  if (isbn || subject || author || title) {
    pathHead.push(`?`);
  }

  const pathTail = [];
  if (isbn) {
    pathTail.push(`isbn=${isbn}`);
  } 
  if (subject) {
    pathTail.push(`subject=${subject}`);
  }
  if (author) {
    pathTail.push(`author=${author}`);
  }
  if (title) {
    pathTail.push(`title=${title}`)
  }
  const fullPath = pathHead.join('') + pathTail.join('&');
  console.log('full path: ', fullPath);
  
  if(response.ok) {
    window.location.href = fullPath;
  }
}

document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);

const recommendationFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the form
  const title = document.querySelector('#keywords').value.trim();
  // Send a POST request to the API endpoint
  const response = await fetch('/api/search', {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers: { 'Content-Type': 'application/json' },
  });

  const pathHead = ['/api/books/recommendations'];
  if (title) {
    pathHead.push(`?`);
  }

  const pathTail = [];
  if (title) {
    pathTail.push(`title=${title}`);
  } 
  
  const fullPath = pathHead.join('') + pathTail.join('&');
  console.log('full path: ', fullPath);
  
  if(response.ok) {
    window.location.href = fullPath;
  }
}
  
document
  .querySelector('.recommended-search-form')
  .addEventListener('submit', recommendationFormHandler);