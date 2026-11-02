/**
 * Placeholder for the real API call.
 * Throw an Error with a readable message to show it under the "Current password" field.
 */
export async function changePassword({ currentPassword, newPassword }) {
  console.info("Changing password", { length: newPassword.length, hasCurrent: Boolean(currentPassword) });
  await new Promise((resolve) => setTimeout(resolve, 500));
}

export async function registerUser(payload) {
  console.info("Registering", { ...payload, password: "••••••••" });
  await new Promise((resolve) => setTimeout(resolve, 700));
  // Demo of a server-side error. Remove once the real API is connected.
  if (payload.email.toLowerCase() === "taken@example.com") {
    const err = new Error("An account with this email already exists.");
    err.field = "email";
    throw err;
  }
  return { id: "usr-1001" };
}