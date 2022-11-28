// require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const allRoutes = require('./routes')

app.use(allRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})