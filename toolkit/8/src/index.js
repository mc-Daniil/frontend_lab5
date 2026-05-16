const app = document.createElement('div');

app.style.fontFamily = 'Arial, sans-serif';
app.style.padding = '20px';

app.innerHTML = `
  <h1>${process.env.APP_TITLE}</h1>

  <p><b>APP_ENV:</b> ${process.env.APP_ENV}</p>
  <p><b>BUILD_CONFIG:</b> ${process.env.BUILD_CONFIG}</p>
  <p><b>API_URL:</b> ${process.env.API_URL}</p>
  <p><b>DEBUG:</b> ${process.env.DEBUG}</p>
`;

document.body.appendChild(app);

console.log('APP_ENV:', process.env.APP_ENV);
console.log('BUILD_CONFIG:', process.env.BUILD_CONFIG);
console.log('API_URL:', process.env.API_URL);
console.log('DEBUG:', process.env.DEBUG);