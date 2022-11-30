require('./helper/dev-dep');
const express = require('express')
const app = express();
const port = process.env.PORT || 5000
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
  res.json({ error: err })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})