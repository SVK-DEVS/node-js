const express = require('express');
const app = express();
app.get('/', (req, res) => {

    res.send(`Hello Worldas ${req.query.name}`);  //data sent by browser when u modify the url with ?name=anil
});
app.listen(4000);