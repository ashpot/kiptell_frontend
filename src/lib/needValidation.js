const emailOk = (v) => /^\S+@\S+\.\S+$/.test(v.trim());

/** Returns an object of { fieldName: message } for the given step. Empty = valid. */
export function validateStep(step, f) {
  const errors = {};
  const required = (key, message) => {
    if (!String(f[key] ?? "").trim()) errors[key] = message;
  };

  if (step === 0) {
    required("title", "Enter a title for this need.");
    required("category", "Select a category.");
    required("location", "Enter where this need exists.");
    required("affected", "Tell us who is affected.");
    required("description", "Briefly describe the need.");
  }

  if (step === 1 && f.isOwner === "no") {
    required("ownerName", "Enter the Need Owner's full name.");
    if (!f.ownerEmail.trim()) errors.ownerEmail = "Enter the Need Owner's email address.";
    else if (!emailOk(f.ownerEmail)) errors.ownerEmail = "Enter a valid email address.";
  }

  if (step === 2) {
    required("whatIsHappening", "Describe what is happening.");
    required("severity", "Choose how urgent this need is.");
  }

  if (step === 3) {
    required("whatIsNeeded", "Describe what is needed.");
  }

  return errors;
}