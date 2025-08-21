// api.js

const API_BASE_URL = "http://localhost:5000/api";  
// idan ka dora a Render ko Netlify sai ka canza wannan zuwa public API URL

// Generic function don GET requests
export async function getData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API GET Error:", error);
    throw error;
  }
}

// Generic function don POST requests
export async function postData(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API POST Error:", error);
    throw error;
  }
}
