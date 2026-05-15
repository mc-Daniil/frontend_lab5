const axios = require('axios');

axios.get('https://vk.com', {
  validateStatus: () => true
})
  .then((response) => {
    console.log('Node.js: запрос выполнен');
    console.log('Status:', response.status);
    console.log('Content-Type:', response.headers['content-type']);

    console.log('\nПервые 500 символов ответа:');
    console.log(String(response.data).slice(0, 500));
  })
  .catch((error) => {
    console.error('Node.js: ошибка запроса');
    console.error(error.message);
  });