var http = require('http')
var { dressPicker } = require('./dressPicker')

const random = () => {
  return dressPicker.calculate()
}

const userSelection = (look, season, footwear, toWear, palette, accessory) => {
  return dressPicker
    .look(look)
    .season(season)
    .footwear(footwear)
    .toWear(...toWear)
    .palette(palette)
    .accessory(...accessory)
    .calculate()
}

// create a server object:
http
  .createServer(function (req, res) {
    if (req.url === '/user-selection') {
      const dress = userSelection(
        'business-formal',
        'winter',
        'heel',
        ['dress', 'pant', 'jacket', 'hat'],
        'neutral',
        ['earring', 'necklace']
      )
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(dress))
    }

    if (req.url === '/random-selection') {
      const dress = random()
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(dress))
    }
    if (req.url === '/') {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ active: true }))
    }
  })
  .listen(8080)
