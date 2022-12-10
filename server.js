const express = require('express')
const app = express();
const {PORT} = require('./envVars.js')
const allRoutes = require('./routes')

// parse request payload
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// all routes
app.use(allRoutes)

// all errors
app.use((err, req, res, next)=>{
  console.error(' ------------------------ unhandled error start ------------------------ ')
  console.error(err)
  console.error(' ------------------------ unhandled error end ------------------------ ')
  res.status(500)
  res.json({ error: new String(err) || 'Internal server error, please check error logs.' })
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})