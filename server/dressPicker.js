const data = [
  {
    name: 'Shoe 1',
    image: 'https://',
    type: 'shoes',
    kind: 'flat',
    box: [2, 3],
    color: 'neutral',
    seasons: ['spring'],
    occassion: 'business-casual'
  },
  {
    name: 'Shoe 2',
    image: 'https://',
    type: 'shoes',
    kind: 'heel',
    box: [2, 3],
    color: 'neutral',
    seasons: ['winter'],
    occassion: 'business-formal'
  },
  {
    name: 'Jacket',
    image: 'https://',
    type: 'jacket',
    kind: null,
    box: [1],
    color: 'black',
    seasons: ['spring'],
    occassion: 'business-formal'
  },
  {
    name: 'Top 1',
    image: 'https://',
    type: 'top',
    kind: null,
    box: [1],
    color: 'white',
    seasons: ['spring', 'winter'],
    occassion: 'business-formal'
  },
  {
    name: 'Top 2',
    image: 'https://',
    type: 'top',
    kind: null,
    box: [1],
    color: 'black',
    seasons: ['spring'],
    occassion: 'business-casual'
  },
  {
    name: 'Top 3',
    image: 'https://',
    type: 'top',
    kind: null,
    box: [1],
    color: 'black',
    seasons: ['spring'],
    occassion: 'business-casual'
  },
  {
    name: 'Pant 1',
    image: 'https://',
    type: 'pant',
    kind: null,
    box: [2],
    color: 'black',
    seasons: ['spring'],
    occassion: 'business-formal'
  },
  {
    name: 'Dress 1',
    image: 'https://',
    type: 'dress',
    kind: null,
    box: [2],
    color: 'purple',
    seasons: ['spring'],
    occassion: 'business-formal'
  },
  {
    name: 'Jumpsuit 1',
    image: 'https://',
    type: 'jumpsuit',
    kind: null,
    box: [1],
    color: 'red',
    seasons: ['winter'],
    occassion: 'business-casual'
  },
  {
    name: 'Romper 1',
    image: 'https://',
    type: 'romper',
    kind: null,
    box: [1],
    color: 'red',
    seasons: ['winter'],
    occassion: 'business-casual'
  },
  {
    name: 'Skirt 1',
    image: 'https://',
    type: 'skirt',
    kind: null,
    box: [2],
    color: 'warm',
    seasons: ['winter'],
    occassion: 'business-formal'
  },
  {
    name: 'Necklace 1',
    image: 'https://',
    type: 'accessory',
    kind: 'necklace',
    box: [4, 5, 6],
    color: null,
    seasons: ['summer'],
    occassion: 'business-formal'
  },
  {
    name: 'Skirt 1',
    image: 'https://',
    type: 'accessory',
    kind: 'earring',
    box: [4, 5, 6],
    color: null,
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Short 1',
    image: 'https://',
    type: 'shorts',
    kind: null,
    box: [2, 3],
    color: null,
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Pant n',
    image: 'https://',
    type: 'pant',
    kind: null,
    box: [2, 3],
    color: null,
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Short 2',
    image: 'https://',
    type: 'shorts',
    kind: null,
    box: [2, 3],
    color: null,
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Bag 1',
    image: 'https://',
    type: 'accessory',
    kind: 'bag',
    box: [4, 5, 6],
    color: 'warm',
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Scarves 1',
    image: 'https://',
    type: 'accessory',
    kind: 'scarves',
    box: [4, 5, 6],
    color: 'warm',
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Dress n',
    image: 'https://',
    type: 'dress',
    kind: null,
    box: [4, 5, 6],
    color: 'warm',
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Dress c',
    image: 'https://',
    type: 'dress',
    kind: null,
    box: [4, 5, 6],
    color: 'warm',
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Dress d',
    image: 'https://',
    type: 'dress',
    kind: null,
    box: [4, 5, 6],
    color: 'warm',
    seasons: ['summer'],
    occassion: 'business-casual'
  },
  {
    name: 'Dress e',
    image: 'https://',
    type: 'dress',
    kind: null,
    box: [4, 5, 6],
    color: 'warm',
    seasons: ['summer'],
    occassion: 'business-casual'
  }
]

class DressPicker {
  constructor() {
    this.data = []
    this.toWearRandom = []
    this.box2Result = []

    this.need = this.need.bind(this)
    this.season = this.season.bind(this)
    this.footwear = this.footwear.bind(this)
    this.toWear = this.toWear.bind(this)
  }

  /**
   * get one item of any of these types {Top,Dress,Jumpsuit,Romper}
   */
  box1(dressType) {
    const rex = new RegExp('^Top|Dress|Jumpsuit|Romper', 'i')

    const filteredItem = dressType
      ? data.filter(item => item.type === dressType)
      : data.filter(item => rex.test(item.type))
    this.toWearRandom = this.randomSelector(filteredItem)
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
  box2(box2Type) {
    const rex = new RegExp('^pant|skirt|shorts|shoes', 'i')

    // if what's in box one is a dress then a shoes goes into two
    if (this.toWearRandom[0].type === 'dress' || box2Type === 'dress') {
      const filteredShoes = data.filter(({ type }) => type === 'shoes')
      this.box2Result = this.randomSelector(filteredShoes)
      return this
    }

    const filteredItem = box2Type
      ? data.filter(item => item.type === box2Type)
      : data.filter(item => rex.test(item.type))
    this.box2Result = this.randomSelector(filteredItem)
    return this
  }

  /**
   * get one item that has the type Shoes
   * only if there's no Shoes in box two
   */
  box3(box3Type) {
    const rex = new RegExp('^pant|skirt|shorts', 'i')

    // if what's in box one is a dress then a shoes goes into two
    if (this.box2Result[0].type !== 'shoes' && !box3Type) {
      const filteredShoes = data.filter(({ type }) => type === 'shoes')
      return this.randomSelector(filteredShoes)
    }

    const filteredItem = box3Type
      ? data.filter(item => box3Type === item.type)
      : data.filter(item => rex.test(item.type))
    return this.randomSelector(filteredItem)
  }

  /**
   * Given a filtered array of items, returns one random item
   */
  randomSelector(filteredItem) {
    const randomerIndex = Math.floor(Math.random() * filteredItem.length)

    return filteredItem.filter((item, i) => randomerIndex === i)
  }

  /// ///////////////////////////////////////////////////////////////////////
  need(occassion) {
    this.data = data.filter(item => item.occassion === occassion)
    return this
  }

  season(season) {
    this.data = this.data.filter(item => item.seasons.includes(season))
    return this
  }

  footwear(kind) {
    this.data = this.data.filter(item => {
      if (item.type === 'shoes') {
        return item.kind === kind
      }
      return item
    })
    return this
  }

  toWear(...options) {
    this.data = this.data.filter(item => {
      // const y = options.map((e) => {
      //   if (item.type === e) {
      //     return item
      //   }
      //   return item;
      // });
    })
    return this
  }

  palette() {}
  jewelry() {}
}

const dressPicker = new DressPicker()

const dress = dressPicker
  .need('business-formal')
  .season('winter')
  .footwear('heel')
  .toWear('top', 'pant')

module.exports = { data, dress, dressPicker }
