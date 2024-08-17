const apiRequester = async (
  url,
  method = "GET",
  data = null,
  token,
  headers = {}
) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "X-Authorization": `${token}` } : {}),
      ...headers,
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error making request:", error);
    throw error; // Re-throw the error after logging it
  }
};

export default apiRequester;
