const express = require('express')
const axios = require('axios')
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(_ => {
  const server = express()
  // serve service worker
  server.get(
    '/sw.js',
    (req, res) => res.sendFile(path.resolve('./.next/sw.js'))
  )
  server.get('/api/ip', (req, res) => {
    let ip = req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress
    ip = ip.split(':').pop()
    axios
      .get(`http://freegeoip.net/json/${ip}`)
      .then(({ data }) => {
        console.log(data)
        res.send(data)
      })
      .catch(e => res.status(404).send(e.response.statusText))
  })
  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT, err => {
    if (err) throw err
    console.log('> App running on port 3000')
  })
})
