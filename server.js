const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [
  { id: 1, name: 'Test User', username: 'hzw_9527', password: '123123' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: '用户名或密码错误' });
  }
});

app.get('/getInfo', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  if (token === 'fake-jwt-token') {
    res.json({ id: 1, name: 'Test User' });
  } else {
    res.status(401).json({ message: '未授权' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
