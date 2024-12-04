export const validatePhone = (phone: string) => {
  const phoneRegex = /^(?:\d{3}-\d{4}-\d{4}|\d{2}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{4}-\d{4})$/;
  return phoneRegex.test(phone);
};

export const validateURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
