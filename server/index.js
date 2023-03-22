import app from './app.js';

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ status: 200, data: 'OK' });
});

app.listen(port, () => {
  console.log('Application is running on port - ', port);
});
