export const exerciseOptions = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '282becb941mshcd242978e6f140ep16e336jsn600e4756d9db',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '282becb941mshcd242978e6f140ep16e336jsn600e4756d9db',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
