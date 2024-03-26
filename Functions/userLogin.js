// user session
let currentUser = null;

// function to handle user login
function loginUser(username, password) {
  // you would check the provided credentials against a database or authentication system
  if (username === 'admin' && password === 'password') {
    currentUser = {
      isLoggedIn: true,
      isAdmin: true,
      name: 'Admin'
    };
    console.log('Login successful.');
  } else {
    currentUser = {
      isLoggedIn: true,
      isAdmin: false,
      name: username
    };
    console.log(`Welcome, ${username}!`);
  }
}

// function to handle page access control
function canAccessPage(path) {
  // if the user is logged in and grants/denies access based on the user's role
  if (!currentUser || !currentUser.isLoggedIn) {
    console.log("Access denied. Please log in.");
    return false;
  } else if (path === '/admin' && !currentUser.isAdmin) {
    console.log("Access denied. You need admin privileges.");
    return false;
  } else {
    console.log("Access granted.");
    return true;
  }
}

// function to generate personalized content
function generateContent(contentType) {
  if (!currentUser) {
    console.log("Please log in to access content.");
  } else {
    switch (contentType) {
      case 'greeting':
        console.log(`Hello, ${currentUser.name}!`);
        break;
      case 'dashboard':
        console.log(`Welcome to your ${currentUser.isAdmin ? 'admin' : 'user'} dashboard.`);
        break;
      // Add more cases for different types of content
      default:
        console.log("Invalid content type.");
    }
  }
}

// Log in a regular user
loginUser('alice', 'password'); 
// Access granted
canAccessPage('/'); 
// Access denied. You need admin privileges.
canAccessPage('/admin'); 
// Hello, alice!
generateContent('greeting'); 
// Welcome to your user dashboard.

generateContent('dashboard'); 
// Log in as an admin user
loginUser('admin', 'password'); 
// Access granted.
canAccessPage('/admin'); 
// Welcome to your admin dashboard.
generateContent('dashboard'); 
