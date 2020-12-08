/* eslint-disable space-before-function-paren */
class DressPicker {
  constructor(data) {
    this.data = data
    this.result = []

    this.boxOneItem = null

    this.boxOne = this.boxOne.bind(this)
    this.boxTwo = this.boxTwo.bind(this)
    this.boxThree = this.boxThree.bind(this)
    this.boxFour = this.boxFour.bind(this)
    this.boxFive = this.boxFive.bind(this)
    this.boxSix = this.boxSix.bind(this)

    this.randomSelector = this.randomSelector.bind(this)

    this.need = this.need.bind(this)
    this.season = this.season.bind(this)
    this.footwear = this.footwear.bind(this)
    this.toWear = this.toWear.bind(this)
    this.palette = this.palette.bind(this)
    this.jewellery = this.jewellery.bind(this)
  }

  need(tag) {
    this.data = this.data.filter(item => item.tag === tag)
    return this
  }

  season(season) {
    this.data = this.data.filter(item => {
      if (item.seasons) {
        return item.seasons.includes(season)
      }
      return item
    })
    return this
  }

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
   * @Description
   * if options are more than one,
   * dress, jumpsuit, romper do not go with any other additions
   * Note that these top goes with any of pant, short and skirt,
   * which are xor of each other, i.e (pant, short and skirt)
   * can not be in options array at same time
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
        case 'accessory':
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

  palette(color) {
    this.data = this.data.filter(item => {
      if (item.color) {
        return item.color === color
      }
      return item
    })
    return this
  }

  jewellery(...names) {
    if (names.length > 0) {
      this.data = this.data.filter(item => {
        if (item.type === 'accessory' && item.kind === 'jewellery') {
          return names.includes(item.name)
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
    this.result.push(filteredItem)
    return this
  }

  /**
   * get one item that has the type Pant, Skirt, Shorts, Shoes
   * can only be one and can pick at random
   *
   * no Skirt
   * no Pants if box one has a Dress
   * no Shorts if box one has a Dress
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
    if (this.result[1].type !== 'shoe') {
      const filteredShoes = this.data.filter(({ type }) => type === 'shoe')
      this.result.push(this.randomSelector(filteredShoes))
    }
    return this
  }

  boxFour() {
    this.data.forEach(item => {
      if (item.type === 'accessory') {
        switch (item.kind) {
          case 'jacket':
            this.result.push(item)
            break
          case 'hat':
            this.result.push(item)
            break
          case 'jewellery':
            if (item.name === 'Earring') {
              this.result.push(item)
            }
            if (item.name === 'Necklace') {
              this.result.push(item)
            }
            if (item.name === 'Braclet') {
              this.result.push(item)
            }
            break
          case 'scarve':
            this.result.push(item)
            break
          case 'belt':
            this.result.push(item)
            break
          case 'bag':
            this.result.push(item)
            break
          default:
            break
        }
      }
    })
    return this
  }

  boxFive() {
    this.data.forEach(item => {
      if (item.type === 'accessory') {
        const isHatExist = this.result.find(({ kind }) => kind === 'hat')
        if (item.kind === 'hat' && !isHatExist) {
          this.result.push(item)
          return this
        }
        const isJewelleryExist = this.result.find(({ kind }) => kind === 'jewellery')
        if (item.kind === 'jewellery' && !isJewelleryExist) {
          const isEarringExist = this.result.find(({ name }) => name === 'Earring')
          if (item.name === 'Earring' && !isEarringExist) {
            this.result.push(item)
          }
          const isNecklaceExist = this.result.find(({ name }) => name === 'Necklace')
          if (item.name === 'Necklace' && !isNecklaceExist) {
            this.result.push(item)
          }
          return this
        }
        const isScarveExist = this.result.find(({ kind }) => kind === 'scarve')
        if (item.kind === 'scarve' && !isScarveExist) {
          this.result.push(item)
          return this
        }
        if (item.kind === 'jewellery' && !isJewelleryExist) {
          if (item.name === 'Braclet') {
            this.result.push(item)
          }
          return this
        }
        const isBeltExist = this.result.find(({ kind }) => kind === 'belt')
        if (item.kind === 'belt' && !isBeltExist) {
          this.result.push(item)
          return this
        }
        const isBagExist = this.result.find(({ kind }) => kind === 'bag')
        if (item.kind === 'bag' && !isBagExist) {
          this.result.push(item)
          return this
        }
      }
    })

    return this
  }

  boxSix() {
    this.data.forEach(item => {
      if (item.type === 'accessory') {
        const isJewelleryExist = this.result.find(({ kind }) => kind === 'jewellery')
        if (item.kind === 'jewellery' && !isJewelleryExist) {
          const isEarringExist = this.result.find(({ name }) => name === 'Earring')
          if (item.name === 'Earring' && !isEarringExist) {
            this.result.push(item)
          }
          const isNecklaceExist = this.result.find(({ name }) => name === 'Necklace')
          if (item.name === 'Necklace' && !isNecklaceExist) {
            this.result.push(item)
          }
          return this
        }
        const isScarveExist = this.result.find(({ kind }) => kind === 'scarve')
        if (item.kind === 'scarve' && !isScarveExist) {
          this.result.push(item)
          return this
        }
        if (item.kind === 'jewellery' && !isJewelleryExist) {
          if (item.name === 'Braclet') {
            this.result.push(item)
          }
          return this
        }
        const isBeltExist = this.result.find(({ kind }) => kind === 'belt')
        if (item.kind === 'belt' && !isBeltExist) {
          this.result.push(item)
          return this
        }
        const isBagExist = this.result.find(({ kind }) => kind === 'bag')
        if (item.kind === 'bag' && !isBagExist) {
          this.result.push(item)
          return this
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

  calculate() {
    const data = this.boxOne().boxTwo().boxThree().boxFour().boxFive().boxSix()
    this.result = []
    return data
    // return this.data
  }
}

const dressPicker = new DressPicker(require('./data.json'))

module.exports = { dressPicker }
