/**
 * Placeholder for the real API call.
 * Replace the body with a fetch/axios request to your backend.
 */
export async function submitNeed(payload) {
  console.info("Submitting need", payload);
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { id: "KT-1048" };
}