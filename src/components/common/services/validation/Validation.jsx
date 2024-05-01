function checkEmail(email) {
  const isContAt = email.includes('@');
  if (!isContAt) {
    return `Email address must contain "@"`;
  }
  return null;
}

function checkPassword(password, page) {
  const isContLowercase = /[a-z]/.test(password);
  const isContUppercase = /[A-Z]/.test(password);
  const isContNumbers = /\d/.test(password);
  const isContSpecialCh = /[!@#$%^&*()_\-+=\\|[\]{};:'",.<>/?]/.test(password);
  const isLonger8Ch = password.length > 7;
  if (page === 'register') {
    if (!isContLowercase) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!isContUppercase) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!isContNumbers) {
      return 'Password must contain at least one number';
    }
    if (!isContSpecialCh) {
      return 'Password must contain at least one special character';
    }
  }
  if (!isLonger8Ch) {
    return 'Password must be longer than 8 characters';
  }
  return null;
}

function checkRepeatPass(password, repeatPassword) {
  const isPasswordMatch = password === repeatPassword;
  if (!isPasswordMatch) {
    return `Password doesn't match`;
  }
  return null;
}

function checkName(name) {
  const contLetters = /^[a-zA-Z\s]+$/.test(name);
  const contOnlySpaces = name.trim() === '';
  if (contOnlySpaces) {
    return 'Name field cannot be empty';
  }
  if (!contLetters) {
    return 'Name can only contain letters and spaces';
  }
  return null;
}

function checkPhone(phone) {
  const contNumbers = /^\d+$/.test(phone);
  if (!contNumbers) {
    return 'Phone can only contain numbers';
  }
  return null;
}

const Validation = {
  checkEmail,
  checkPassword,
  checkRepeatPass,
  checkName,
  checkPhone,
};

export default Validation;
