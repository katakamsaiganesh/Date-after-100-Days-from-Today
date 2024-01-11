const {addDays} = require('date-fns')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  const todaydate = new Date()
  let result = addDays(
    new Date(
      todaydate.getFullYear(),
      todaydate.getMonth(),
      todaydate.getDate(),
    ),
    100,
  )
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`,
  )
})

module.exports = app
