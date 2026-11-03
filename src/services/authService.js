/**
 * Placeholders for the real API calls.
 * Throw an Error with a readable message to show it in the form.
 */
export async function changePassword({ currentPassword, newPassword }) {
  console.info("Changing password", { length: newPassword.length, hasCurrent: Boolean(currentPassword) });
  await new Promise((resolve) => setTimeout(resolve, 500));
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * DEMO ONLY: in-memory accounts so you can try the sign-in flow before the API exists.
 * Remove this list (and the checks below) when you connect the real backend.
 * Try:  chisom@example.com / org@example.com / company@example.com  with password "password123"
 */
const ACCOUNTS = [
  { username: "chisom", email: "chisom@example.com", password: "password123", role: "need_owner", firstName: "Chisom", lastName: "Ezeji", phone: "+234 800 000 0000", address: "Eden Estate, Ikeja, Lagos", country: "Nigeria" },
  { username: "org", email: "org@example.com", password: "password123", role: "organization", firstName: "Ngozi", lastName: "Adeyemi", phone: "+234 801 111 2222", address: "Victoria Island, Lagos", country: "Nigeria" },
  { username: "company", email: "company@example.com", password: "password123", role: "company", firstName: "Tunde", lastName: "Bello", phone: "+234 802 333 4444", address: "Wuse 2, Abuja", country: "Nigeria" },
];

const publicUser = ({ password, username, ...user }) => user; // never hand the password back

export async function registerUser(payload) {
  await delay(700);
  const email = payload.email.trim().toLowerCase();
  if (ACCOUNTS.some((a) => a.email === email)) {
    const err = new Error("An account with this email already exists.");
    err.field = "email";
    throw err;
  }
  ACCOUNTS.push({ ...payload, email, username: email.split("@")[0], address: "", country: "" });
  return { id: "usr-1001" };
}

/** identifier = username or email. Returns the signed-in user's details. */
export async function loginUser({ identifier, password }) {
  await delay(600);
  const id = identifier.trim().toLowerCase();
  const account = ACCOUNTS.find((a) => (a.email === id || a.username === id) && a.password === password);
  if (!account) throw new Error("Incorrect username/email or password.");
  return publicUser(account);
}