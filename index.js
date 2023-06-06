const express = require('express');
const app = express();

const path = require('path');


app.get('/', (req, res) => {
  res.send('Hello, Node.js!<br>'
  +'test http://localhost:3000/page<br>'
  +'test http://localhost:3000/pagehtml<br>'
  +'test http://localhost:3000/users/123/<br>'
  +'test http://localhost:3000/users/123/posts/456<br>'
  );
});

app.get('/page', (req, res) => {
  res.send('Hello page!');
});

app.get('/pagehtml', (req, res) => {
  const filePath = path.join(__dirname, './resource/html/page.html');
  res.sendFile(filePath);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
  });

app.get('/users/:id/posts/:postId', (req, res) => {
    const userId = req.params.id;
    const postId = req.params.postId;
    res.send(`User ID: ${userId}, Post ID: ${postId}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
