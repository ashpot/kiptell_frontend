export const COUNTRIES = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Cameroon",
  "Senegal",
  "United Kingdom",
  "United States",
  "Other",
];

/** A profile counts as complete once the contact details beyond the basics are filled in. */
export const isProfileComplete = (user) =>
  Boolean(user.phone?.trim() && user.address?.trim() && user.country?.trim());