import axios from 'axios';
const baseURLFetch = 'https://database.happypay.live' // Replace with your API base URL
const axiosInstance = axios.create({
  baseURL: 'https://database.happypay.live', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any headers that you want to include in every request
  },
});

export const apiPost = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('API Post Error:', error);
    throw error;
  }
};

export const apiGet = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('API Get Error:', error);
    throw error;
  }
};

export const apiPut = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    console.error('API Put Error:', error);
    throw error;
  }
};

export const fetchDataByPost = async (url, requestData) => {
  try {
    const response = await fetch(baseURLFetch + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch POST Error:', error);
    throw error;
  }
};

