/* eslint-disable space-before-function-paren */
class DressPicker {
  constructor(data) {
    this.data = data
    this.result = []

    this.boxOneItem = null
    this.allExtraAndAccessory = []

    this.boxOne = this.boxOne.bind(this)
    this.boxTwo = this.boxTwo.bind(this)
    this.boxThree = this.boxThree.bind(this)
    this.boxFour = this.boxFour.bind(this)
    this.boxFive = this.boxFive.bind(this)
    this.boxSix = this.boxSix.bind(this)

    this.randomSelector = this.randomSelector.bind(this)

    this.look = this.look.bind(this)
    this.season = this.season.bind(this)
    this.footwear = this.footwear.bind(this)
    this.toWear = this.toWear.bind(this)
    this.palette = this.palette.bind(this)
    this.accessory = this.accessory.bind(this)
  }

  // All item has a particular look they give, such as formal, casual etc
  // this method filter the data(wardrobe) collection to the speicfic
  // look the user ask for.
  look(tag) {
    this.data = this.data.filter(item => item.tag === tag)
    return this
  }

  // Some of the item may have some season(weather) which they could be worn in
  // such as winter/summer etc, this method filter out those that doesn't match the
  // season the user ask for, but neglect those which doesn't have any season(null)
  season(season) {
    this.data = this.data.filter(item => {
      if (item.seasons) {
        return item.seasons.includes(season)
      }
      return item
    })
    return this
  }

  // this method just determine the kind of shoe the user want to wear, heel or flat
  footwear(kind) {
    if (kind) {
      this.data = this.data.filter(item => {
        if (item.type === 'shoe') {
          return item.kind === kind
        }
        return item
      })
    }
    return this
  }

  /**
   * @param  {...any} options
   * @Rules
   *  <- We assume that the options obey the rules ->
   * dress, jumpsuit, and romper do not go with any other additions
   * Note that top goes with any of pant, short and skirt -> which are xor of each other
   * can not be in options array at same time
   * @Description
   * This method tries to determine the sense of dressing the user wants.
   */
  toWear(...options) {
    this.data = this.data.filter(item => {
      switch (item.type) {
        case 'top':
          return options.includes('top')
        case 'dress':
          return options.includes('dress')
        case 'jumpsuit':
          return options.includes('jumpsuit')
        case 'romper':
          return options.includes('romper')
        case 'pant':
          return options.includes('pant')
        case 'skirt':
          return options.includes('skirt')
        case 'short':
          return options.includes('short')
        case 'extra':
          switch (item.kind) {
            case 'jacket':
              return options.includes('jacket')
            case 'hat':
              return options.includes('hat')
            case 'scarve':
              return options.includes('scarve')
            default:
              return item
          }
        default:
          return item
      }
    })
    // cue: the first index of the options should be in box one
    // [top,dress,jumpsuit,romper], but we have to confirm
    if (['top', 'dress', 'jumpsuit', 'romper'].includes(options[0])) {
      this.boxOneItem = options[0]
    }
    return this
  }

  // some of the items have color palette we filter the data to match
  // those with that color only if they do have a color palette defined
  palette(color) {
    this.data = this.data.filter(item => {
      if (item.color) {
        return item.color === color
      }
      return item
    })
    return this
  }

  // This method job is to filter the data which has the type of accessory
  // matching it to the kinds of accessory the user has passed
  accessory(...kinds) {
    if (kinds.length > 0) {
      this.data = this.data.filter(item => {
        if (item.type === 'accessory') {
          return kinds.includes(item.kind)
        }
        return item
      })
      return this
    }
    return this
  }

  /**
   * get one item of any of these types {Top,Dress,Jumpsuit,Romper}
   */
  boxOne() {
    const rex = new RegExp('^top|dress|jumpsuit|romper', 'i')

    const items = this.boxOneItem
      ? this.data.filter(i => i.type === this.boxOneItem)
      : this.data.filter(item => rex.test(item.type))
    const filteredItem = this.randomSelector(items)

    if (!this.boxOneItem && filteredItem) {
      this.look(filteredItem.tag).season(filteredItem.seasons[0]).palette(filteredItem.color)
    }
    this.result.push(filteredItem)
    return this
  }

  /**
   * get one item that has the type Pant, Skirt, Shorts, Shoes
   * can only be one and can pick at random
   * no Skirt, Pants, Shorts if box one has a
   * type of any dress|jumpsuit|romper
   */
  boxTwo() {
    // if what's in box one is a dress, jumpsuit, romper then a shoe goes into two
    if (this.result.length > 0 && ['dress', 'jumpsuit', 'romper'].includes(this.result[0].type)) {
      const filteredShoes = this.data.filter(({ type }) => type === 'shoe')
      this.result.push(this.randomSelector(filteredShoes))
      return this
    }

    // if pant, skirt, short exis in data then give them more piority then the shoe
    const filteredItem = this.data.filter(({ type }) => ['pant', 'skirt', 'short'].includes(type))
    this.result.push(this.randomSelector(filteredItem))
    return this
  }

  /**
   * get one item that has the type Shoes
   * only if there's no Shoes in box two
   */
  boxThree() {
    // if what's in box one is a dress then a shoe goes into two
    if (this.result[1] && this.result[1].type !== 'shoe') {
      const filteredShoes = this.data.filter(({ type }) => type === 'shoe')
      this.result.push(this.randomSelector(filteredShoes))
    }
    return this
  }

  // This method pick all extra and accessory from the data.
  // It sorts each item base on the item priority of box places.
  // We then store this sorted data of extra and accessory in allExtraAndAccessory
  // so that we can make use of it in box 5 and 6
  // The items been pick, one of it will be randomly selected
  boxFour() {
    this.allExtraAndAccessory = this.data.filter(({ type }) =>
      ['accessory', 'extra'].includes(type)
    )

    this.allExtraAndAccessory.sort((a, b) => (a.priority > b.priority ? 1 : -1))

    this.allExtraAndAccessory.some(item => {
      if (item.kind === 'jacket') {
        const jackets = this.allExtraAndAccessory.filter(({ kind }) => kind === 'jacket')
        this.result[3] = this.randomSelector(jackets)
        return true
      }
      if (item.kind === 'hat') {
        const hats = this.allExtraAndAccessory.filter(({ kind }) => kind === 'hat')
        this.result[3] = this.randomSelector(hats)
        return true
      }
      if (item.kind === 'earring') {
        const earrings = this.allExtraAndAccessory.filter(({ kind }) => kind === 'earring')
        this.result[3] = this.randomSelector(earrings)
        return true
      }
      if (item.kind === 'necklace') {
        const necklaces = this.allExtraAndAccessory.filter(({ kind }) => kind === 'necklace')
        this.result[3] = this.randomSelector(necklaces)
        return true
      }
      if (item.kind === 'scarve') {
        const scarves = this.allExtraAndAccessory.filter(({ kind }) => kind === 'scarve')
        this.result[3] = this.randomSelector(scarves)
        return true
      }
      if (item.kind === 'braclet') {
        const braclets = this.allExtraAndAccessory.filter(({ kind }) => kind === 'braclet')
        this.result[3] = this.randomSelector(braclets)
        return true
      }
      if (item.kind === 'belt') {
        const belts = this.allExtraAndAccessory.filter(({ kind }) => kind === 'belt')
        this.result[3] = this.randomSelector(belts)
        return true
      }
      if (item.kind === 'bag') {
        const bags = this.allExtraAndAccessory.filter(({ kind }) => kind === 'bag')
        this.result[3] = this.randomSelector(bags)
        return true
      }
    })

    return this
  }

  // Box five does not consider jacket bcos it priority places it at
  // box 4 if it exist
  // We repeact some of what we did in box four.
  boxFive() {
    this.allExtraAndAccessory.some(item => {
      if (item.kind === 'hat') {
        const isHatExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isHatExist) {
          const hats = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[4] = this.randomSelector(hats)
          return true
        }
      }
      if (item.kind === 'earring') {
        const isEarringExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isEarringExist) {
          const earrings = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[4] = this.randomSelector(earrings)
          return true
        }
      }
      if (item.kind === 'necklace') {
        const isNecklaceExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isNecklaceExist) {
          const necklaces = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[4] = this.randomSelector(necklaces)
          return true
        }
      }
      if (item.kind === 'scarve') {
        const isScarveExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isScarveExist) {
          const scarves = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[4] = this.randomSelector(scarves)
          return true
        }
      }
      if (item.kind === 'braclet') {
        const isBracletsExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isBracletsExist) {
          const braclets = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[4] = this.randomSelector(braclets)
          return true
        }
      }
      if (item.kind === 'belt') {
        const isBeltExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isBeltExist) {
          const belts = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[4] = this.randomSelector(belts)
          return true
        }
      }
      if (item.kind === 'bag') {
        const isBagExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isBagExist) {
          const bags = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[4] = this.randomSelector(bags)
          return true
        }
      }
    })

    return this
  }

  // Box six does not consider jacket and hat bcos it priority places t
  // them at box 4 and 4/5 repectively if they exist
  // We repeact some of what we did in box four.
  boxSix() {
    this.allExtraAndAccessory.some(item => {
      if (item.kind === 'earring') {
        const isEarringExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isEarringExist) {
          const earrings = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[5] = this.randomSelector(earrings)
          return true
        }
      }
      if (item.kind === 'necklace') {
        const isNecklaceExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isNecklaceExist) {
          const necklaces = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[5] = this.randomSelector(necklaces)
          return true
        }
      }
      if (item.kind === 'scarve') {
        const isScarveExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isScarveExist) {
          const scarves = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[5] = this.randomSelector(scarves)
          return true
        }
      }
      if (item.kind === 'braclet') {
        const isBracletsExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isBracletsExist) {
          const braclets = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[5] = this.randomSelector(braclets)
          return true
        }
      }
      if (item.kind === 'belt') {
        const isBeltExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isBeltExist) {
          const belts = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[5] = this.randomSelector(belts)
          return true
        }
      }
      if (item.kind === 'bag') {
        const isBagExist = this.result.filter(i => {
          if (i) {
            return i.kind === item.kind
          }
          return i
        })[0]
        if (!isBagExist) {
          const bags = this.allExtraAndAccessory.filter(({ kind }) => kind === item.kind)
          this.result[5] = this.randomSelector(bags)
          return true
        }
      }
    })
    return this.result
  }

  /**
   * Given a filtered array of items, returns one random item
   */
  randomSelector(filteredItem) {
    const randomerIndex = Math.floor(Math.random() * filteredItem.length)

    return filteredItem.filter((item, i) => randomerIndex === i)[0]
  }

  // call all the box methods in a chain to add randomly selected item base
  // on our filter data to each repective box frame
  calculate() {
    const data = this.boxOne().boxTwo().boxThree().boxFour().boxFive().boxSix()
    // clear previous result
    this.result = []
    return data
  }
}

const dressPicker = new DressPicker(require('./data.json'))

module.exports = { dressPicker }
