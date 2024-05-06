function login(status) {
  if (status === 'succeeded') {
    return 'You have logged in';
  }
  if (status === 'failed') {
    return 'Login failed. Please check the email address and password entered';
  }
}

function signup(status) {
  if (status === 'succeeded') {
    return 'The account has been created';
  }
  if (status === 'failed') {
    return 'Signup failed. An error occurred during account creation';
  }
}

function logout(status) {
  if (status === 'succeeded') {
    return 'You have logged out';
  }
  if (status === 'failed') {
    return 'Logout failed. An error occurred during logout';
  }
}

function loadData(status) {
  if (status === 'succeeded') {
    return 'The phonebook has been loaded';
  }
  if (status === 'failed') {
    return 'The phonebook loading failed. An error occurred during the phonebook loading';
  }
}

function addContact(status) {
  if (status === 'succeeded') {
    return 'The contact has been added to the phonebook';
  }
  if (status === 'failed') {
    return 'The addition of the contact failed. An error occured while adding the contact to the phonebook';
  }
}

function deleteContact(status) {
  if (status === 'succeeded') {
    return 'The contact has been deleted from the phonebook';
  }
  if (status === 'failed') {
    return 'The deletion of the contact failed. An error occurred while deleting the contact from the phonebook';
  }
}

const AlertMessages = {
  login,
  signup,
  logout,
  loadData,
  addContact,
  deleteContact,
};

export default AlertMessages;
