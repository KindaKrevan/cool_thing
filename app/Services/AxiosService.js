export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?zip=83705,us&appid=6156a6450405ba26e678c710a88331e6&units=imperial',
  timeout: 5000,
});

export const quoteApi = axios.create({
  baseURL: 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand',
  timeout: 5000,
});

export const imgApi = axios.create({
  baseURL: 'https://api.unsplash.com/photos/random?client_id=rCMWATXNiXyRAyslDwQeoZ0LQ9Z-X978mpLBSn2GC7Y',
  timeout: 5000,
});
