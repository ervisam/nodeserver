const express = require('express');


const app = express();

const port = 3070;

app.get('/', (req, res) => {
  res.send("Ervisa Marku - 231: On your way to pass the lab test... focus on submitting the right files on time!"); // e.g. Mario Rossi - 123456
});


app.listen(port, (err) => {
  console.log(`running server on from port:::::::${port}`);
});
