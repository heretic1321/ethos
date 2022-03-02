import { useEffect, useState } from 'react';

const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState('');

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword
          .split(' ')
          .join('')}&limit=1`
      );
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl(
        'https://media4.giphy.com/media/Sg4DwEJrCpGIU/giphy.gif?cid=ecf05e476mepqws2bq8bwv7k6l4cpcimmfkxgkxk7p69vsb8&rid=giphy.gif&ct=g'
      );
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
