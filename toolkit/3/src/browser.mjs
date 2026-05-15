import axios from 'axios';

const API_URL = 'https://json.geoiplookup.io/';

const container = document.createElement('div');
container.style.fontFamily = 'Arial, sans-serif';
container.style.padding = '20px';

document.body.appendChild(container);

container.innerHTML = `
  <h1>Axios GET request to GeoIPLookup API</h1>
  <p>Тест выполняется в браузере.</p>
  <p>API: ${API_URL}</p>
`;

axios.get(API_URL)
  .then((response) => {
    console.log('Браузер: запрос выполнен');
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    console.log('Data:', response.data);

    const data = response.data;

    container.innerHTML += `
      <h2>Результат</h2>
      <p style="color: green;">Запрос выполнен успешно.</p>
      <p><b>Status:</b> ${response.status}</p>
      <p><b>IP:</b> ${data.ip}</p>
      <p><b>Country:</b> ${data.country_name}</p>
      <p><b>City:</b> ${data.city}</p>
      <p><b>ISP:</b> ${data.isp}</p>
      <p><b>Timezone:</b> ${data.timezone_name}</p>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  })
  .catch((error) => {
    console.error('Браузер: ошибка запроса');
    console.error(error);

    container.innerHTML += `
      <h2>Результат</h2>
      <p style="color: red;">
        Запрос из браузера не выполнен.
      </p>
    `;
  });