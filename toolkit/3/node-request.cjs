const axios = require('axios');

const API_URL = 'https://json.geoiplookup.io/';

axios.get(API_URL, {
  validateStatus: () => true
})
  .then((response) => {
    console.log('Node.js: запрос выполнен');
    console.log('Status:', response.status);
    console.log('Content-Type:', response.headers['content-type']);

    const data = response.data;

    console.log('\nОсновные данные:');
    console.log('IP:', data.ip);
    console.log('Country:', data.country_name);
    console.log('City:', data.city);
    console.log('ISP:', data.isp);
    console.log('Timezone:', data.timezone_name);

    console.log('\nПолный JSON:');
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((error) => {
    console.error('Node.js: ошибка запроса');
    console.error(error.message);
  });