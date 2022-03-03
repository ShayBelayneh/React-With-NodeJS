const mongoose = require('mongoose')
const STRING_CONNECTION = process.env.studentsStringConnection

mongoose
  .connect(STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log('connection to STRING_CONNECTION')
  )
  .catch(err => {
    console.log(err)
  })

module.exports = mongoose.connection;

