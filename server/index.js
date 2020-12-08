var http = require('http')
var { dressPicker } = require('./dressPicker')

// create a server object:
http
  .createServer(function (req, res) {
    // const box1 = dressPicker.box1('top').toWearRandom
    // const box2 = dressPicker.box2().box2Result
    // const box3 = dressPicker.box3()

    // const fullBox = {
    //   box1,
    //   box2,
    //   box3
    // }

    const dress = dressPicker
      .need('business-formal')
      .season('winter')
      .footwear('heel')
      .toWear('top', 'pant')
      .palette('neutral')
      .jewellery('Earring')
      .calculate()

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(dress)) // end the response
  })
  .listen(8080) // the server object listens on port 8080
