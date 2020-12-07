var http = require('http')
var { dress, dressPicker } = require('./dressPicker')

// create a server object:
http
  .createServer(function (req, res) {
    const box1 = dressPicker.box1('dress').toWearRandom
    const box2 = dressPicker.box2().box2Result
    const box3 = dressPicker.box3()

    const fullBox = {
      box1,
      box2,
      box3
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(fullBox)) // end the response
  })
  .listen(8080) // the server object listens on port 8080
