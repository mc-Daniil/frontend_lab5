import axios from 'axios';

const container = document.createElement('div');
container.style.fontFamily = 'Arial, sans-serif';
container.style.padding = '20px';

document.body.appendChild(container);

container.innerHTML = `
  <h1>Axios GET request to vk.com</h1>
  <p>Тест выполняется в браузере.</p>
`;

axios.get('https://vk.com')
  .then((response) => {
    console.log('Браузер: запрос выполнен');
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    console.log('Data:', response.data);

    container.innerHTML += `
      <p style="color: green;">Запрос выполнен. Status: ${response.status}</p>
    `;
  })
  .catch((error) => {
    console.error('Браузер: ошибка запроса');
    console.error(error);

    container.innerHTML += `
      <p style="color: red;">
        Запрос из браузера не выполнен.
      </p>
    `;
  });