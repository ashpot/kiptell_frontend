export const isEmail = (v) => /^\S+@\S+\.\S+$/.test(v.trim());
export const isPhone = (v) => /^\+?[\d\s-]{7,}$/.test(v.trim());

/** Returns { field: message } for the sign-up form. Empty object = valid. */
export function validateSignUp(f) {
  const e = {};
  if (!f.role) e.role = "Choose how you'll use Kiptell.";
  if (!f.firstName.trim()) e.firstName = "Enter your first name.";
  if (!f.lastName.trim()) e.lastName = "Enter your last name.";
  if (!f.phone.trim()) e.phone = "Enter your phone number.";
  else if (!isPhone(f.phone)) e.phone = "Enter a valid phone number.";
  if (!f.email.trim()) e.email = "Enter your email address.";
  else if (!isEmail(f.email)) e.email = "Enter a valid email address.";
  if (!f.password) e.password = "Create a password.";
  else if (f.password.length < 8) e.password = "Use at least 8 characters.";
  return e;
}