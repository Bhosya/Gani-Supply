const SHEETBEST_API_URL = import.meta.env.VITE_SHEETBEST_API_URL;

if (!SHEETBEST_API_URL) {
  throw new Error(
    "VITE_SHEETBEST_API_URL is not defined in environment variables"
  );
}

export const submitContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await fetch(`${SHEETBEST_API_URL}/tabs/Contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the response is ok or if we got a successful response
    if (!response.ok && response.status !== 201) {
      throw new Error("Failed to submit contact form");
    }

    // Try to parse the response, but don't throw if it fails
    try {
      return await response.json();
    } catch {
      // If we can't parse the response but the request was successful, return success
      return { success: true };
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export const submitNewsletterSubscription = async (email: string) => {
  try {
    const response = await fetch(`${SHEETBEST_API_URL}/tabs/Subscriber`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    // Check if the response is ok or if we got a successful response
    if (!response.ok && response.status !== 201) {
      throw new Error("Failed to submit newsletter subscription");
    }

    // Try to parse the response, but don't throw if it fails
    try {
      return await response.json();
    } catch {
      // If we can't parse the response but the request was successful, return success
      return { success: true };
    }
  } catch (error) {
    console.error("Error submitting newsletter subscription:", error);
    throw error;
  }
};
