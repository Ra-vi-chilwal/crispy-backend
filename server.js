const express = require('express');
const app = express();

app.get('/:number', (req, res) => {
  const number = parseInt(req.params.number);

  let result = number.toString();

  if (number % 5 === 0) {
    result = 'L';
  }

  if (number % 7 === 0) {
    result =  'R';
  }
   if (number % 7 && number % 5 === 0) {
    result =  'LR';
  }else{
    result = number
  }

  res.json({ result });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});