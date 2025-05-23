const API_URL = import.meta.VITE_API_URL || 'https://api.clayodell.com/';

const apiRequest = async (endpoint, method = 'GET', data = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const textResponse = await response.text();
    console.log('Raw API response:', textResponse);

    // Check if response is JSON
    try {
      const result = await JSON.parse(textResponse);
      return result;
    } catch (parseError) {
      // Return plain text response if JSON parsing fails
      return { message: textResponse };
    }
  } catch (error) {
    console.error('Error making API request:', error);
    throw error;
  }
};

const submitContactForm = async (formData) => {
  return apiRequest('/contact/submit', 'POST', formData);
};

const getContactsInfo = async () => {
  return apiRequest('/contact/contacts');
}

export { submitContactForm, apiRequest };
