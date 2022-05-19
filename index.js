const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '5MB' }));

app.post('/upload', (req, res) => {
  let buffer = new Buffer.from(req.body.file, 'base64');

  let imageName = './upload/' + Date.now().toString() + '.jpg';

  fs.writeFileSync(imageName, buffer, 'base64', (error) => {
    if (error) console.log(error);
  });
});


route = 3010;


app.listen(route, () => {
  console.log(`listening on http://localhost:${route}`);
});
