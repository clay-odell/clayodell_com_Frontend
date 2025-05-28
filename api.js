const API_URL = import.meta.env.VITE_API_URL || "https://api.clayodell.com";

const apiRequest = async (endpoint, method = "GET", data = null, token = null) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const textResponse = await response.text();
    console.log("Raw API response:", textResponse);

    try {
      return JSON.parse(textResponse);
    } catch {
      return { message: textResponse };
    }
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

const submitContactForm = async (formData) => {
  return apiRequest("/contact/submit", "POST", formData);
};

const getContactsInfo = async () => {
  return apiRequest("/contact/contacts");
};

const userLogin = async (credentials) => {
  return apiRequest("/users/login", "POST", credentials);
};

const getAdminProfile = async (token) => {
  return apiRequest("/admin/profile", "GET", null, token);
};

export { submitContactForm, getContactsInfo, apiRequest, userLogin, getAdminProfile };
