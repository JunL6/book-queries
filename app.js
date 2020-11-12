const express = require('express');
const graphHTTP = require('express-graphql')

const app = express();

app.use('graphql', )

// app.get('/', (req, res)=> {
//   res.send("hello world!")
// })

app.listen(4000, ()=>{
  console.log('Now listening on Port 4000')
});