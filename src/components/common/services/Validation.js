function checkEmail(email) {
  const isEmpty = email.trim() === '';
  const contAt = email.includes('@');
  if (isEmpty) {
    return 'Email field cannot be empty';
  }
  if (!contAt) {
    return `Email address must contain "@"`;
  }
  return null;
}

function checkPassword(password, page) {
  const isEmpty = password.trim() === '';
  const contLowercase = /[a-z]/.test(password);
  const contUppercase = /[A-Z]/.test(password);
  const contNumbers = /\d/.test(password);
  const contSpecialCh = /[!@#$%^&*()_\-+=\\|[\]{};:'",.<>/?]/.test(password);
  const isShorter = password.length < 8;
  if (isEmpty) {
    return 'Password field cannot be empty';
  }
  if (page === 'signup') {
    if (!contLowercase) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!contUppercase) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!contNumbers) {
      return 'Password must contain at least one number';
    }
    if (!contSpecialCh) {
      return 'Password must contain at least one special character';
    }
  }
  if (isShorter) {
    return 'Password must contain at least 8 characters';
  }
  return null;
}

function checkName(name) {
  const isEmpty = name.trim() === '';
  const contLetters = /^[a-zA-Z\s]+$/.test(name);
  if (isEmpty) {
    return 'Name field cannot be empty';
  }
  if (!contLetters) {
    return 'Name can only contain letters and spaces';
  }
  return null;
}

function checkPhone(phone) {
  const isEmpty = phone.trim() === '';
  const contNumbers = /^\d+$/.test(phone);
  if (isEmpty) {
    return 'Phone field cannot be empty';
  }
  if (!contNumbers) {
    return 'Phone can only contain numbers';
  }
  return null;
}

function checkContact(contacts, name) {
  const findContact = contacts.filter(contact => contact.name === name);
  if (findContact.length === 1) {
    return `${name} is already in contacts`;
  }
  return null;
}

const Validation = {
  checkEmail,
  checkPassword,
  checkName,
  checkPhone,
  checkContact,
};

export default Validation;
