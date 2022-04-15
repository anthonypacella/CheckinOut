const loginFormHandler = async (event) => {
    event.preventDefault();
  
    console.log("admin login button hit");
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/admin/dashboard');
      } else {
        console.log("No");
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('#adminLoginButton')
    .addEventListener('click', loginFormHandler);