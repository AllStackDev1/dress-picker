var http = require('http')
var { dressPicker } = require('./dressPicker')

// create a server object:
http
  .createServer(function (req, res) {
    const dress = dressPicker
      // .look('business-formal')
      // .season('winter')
      // .footwear('heel')
      // .toWear('top', 'pant', 'jacket', 'hat')
      // .palette('neutral')
      // .accessory('earring', 'necklace')
      .calculate()

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(dress))
  })
  .listen(8080)
