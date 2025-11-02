import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g`;

const useGif = (initialTag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(tag) {
    setLoading(true);
    setError(null);
    
    try {
      // Check if API key is available
      if (!API_KEY) {
        throw new Error('GIPHY API key is missing. Please check your .env file.');
      }

      const { data } = await axios.get(
        tag ? `${url}&tag=${encodeURIComponent(tag)}` : url
      );
      const imgSrc = data.data.images.downsized_large.url;
      setGif(imgSrc);
    } catch (err) {
      setError(err.message || 'Failed to fetch GIF. Please try again.');
      console.error('Error fetching GIF:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (initialTag) {
      fetchData(initialTag);
    } else {
      fetchData();
    }
  }, []);

  return { gif, loading, error, fetchData };
}

export default useGif;