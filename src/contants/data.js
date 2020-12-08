const groups = [
  'I need a(n)',
  'Season',
  'Footwear',
  'I want to wear',
  'My color palette',
  'Jewelry'
]

const tags = [
  {
    groups: ['I need a(n)'],
    id: 0,
    name: 'Business formal look'
  },
  {
    groups: ['I need a(n)'],
    id: 1,
    name: 'Elevated business casual look'
  },
  {
    groups: ['I need a(n)'],
    id: 2,
    name: 'Business casual look'
  },
  {
    groups: ['I need a(n)'],
    id: 3,
    name: 'Relaxed business casual look'
  },
  {
    groups: ['I need a(n)'],
    id: 4,
    name: 'Casual look'
  },
  {
    groups: ['I need a(n)'],
    id: 5,
    name: 'Elevated casual look'
  },
  {
    groups: ['I need a(n)'],
    id: 6,
    name: 'Evening look'
  },
  {
    groups: ['I need a(n)'],
    id: 7,
    name: 'Formal evening look'
  },
  {
    groups: ['I need a(n)'],
    id: 8,
    name: 'Casual evening look'
  },
  {
    groups: ['I need a(n)'],
    id: 9,
    name: 'Weekend look'
  },
  {
    groups: ['I need a(n)'],
    id: 10,
    name: 'Day party'
  },
  {
    groups: ['I need a(n)'],
    id: 11,
    name: 'Lounge look'
  },
  {
    groups: ['I need a(n)'],
    id: 12,
    name: 'Gym look'
  },
  {
    groups: ['I want to wear'],
    id: 13,
    name: 'Only dresses'
  },
  {
    groups: ['I want to wear'],
    id: 14,
    name: 'Tops and pants'
  },
  {
    groups: ['I want to wear'],
    id: 15,
    name: 'Tops and skirts'
  },
  {
    groups: ['I want to wear'],
    id: 16,
    name: 'Dress with a jacket'
  },
  {
    groups: ['I want to wear'],
    id: 17,
    name: 'Tops and pants with a jacket'
  },
  {
    groups: ['I want to wear'],
    id: 18,
    name: 'Top and skirts with a jacket'
  },
  {
    groups: ['My color palette'],
    id: 19,
    name: 'Neutral colors'
  },
  {
    groups: ['My color palette'],
    id: 20,
    name: 'Neutral solids'
  },
  {
    groups: ['My color palette'],
    id: 21,
    name: 'Neutrals prints'
  },
  {
    groups: ['My color palette'],
    id: 22,
    name: 'Colored solids'
  },
  {
    groups: ['My color palette'],
    id: 23,
    name: 'Colored prints'
  },
  {
    groups: ['My color palette'],
    id: 24,
    name: 'Color'
  },
  {
    groups: ['My color palette'],
    id: 25,
    name: 'Bright'
  },
  {
    groups: ['My color palette'],
    id: 26,
    name: 'Muted'
  },
  {
    groups: ['Season'],
    id: 27,
    name: 'Spring'
  },
  {
    groups: ['Season'],
    id: 28,
    name: 'Summer'
  },
  {
    groups: ['Season'],
    id: 29,
    name: 'Fall'
  },
  {
    groups: ['Season'],
    id: 30,
    name: 'Winter'
  },
  {
    groups: ['Season'],
    id: 31,
    name: 'Winter-To-Spring'
  },
  {
    groups: ['Season'],
    id: 32,
    name: 'Summer-To-Fall'
  },
  {
    groups: ['Footwear'],
    id: 33,
    name: 'Only heels'
  },
  {
    groups: ['Footwear'],
    id: 34,
    name: 'Mid heels/Kitten heels'
  },
  {
    groups: ['Footwear'],
    id: 35,
    name: 'No heels/Flat shoes'
  },
  {
    groups: ['Footwear'],
    id: 36,
    name: 'Tall boots'
  },
  {
    groups: ['Footwear'],
    id: 37,
    name: 'Ankle Boots'
  },
  {
    groups: ['Jewelry'],
    id: 38,
    name: 'Statement'
  },
  {
    groups: ['Jewelry'],
    id: 39,
    name: 'Statement earrings'
  },
  {
    groups: ['Jewelry'],
    id: 40,
    name: 'Statement necklaces'
  },
  {
    groups: ['Jewelry'],
    id: 41,
    name: 'Statement bracelets'
  },
  {
    groups: ['Jewelry'],
    id: 42,
    name: 'Minimal '
  },
  {
    groups: ['Jewelry'],
    id: 43,
    name: 'Minimal earrings'
  },
  {
    groups: ['Jewelry'],
    id: 44,
    name: 'Minimal necklaces'
  },
  {
    groups: ['Jewelry'],
    id: 45,
    name: 'Minimal bracelets'
  },
  {
    groups: ['Jewelry'],
    id: 46,
    name: 'Gold tone'
  },
  {
    groups: ['Jewelry'],
    id: 47,
    name: 'Silver tone'
  },
  {
    groups: ['Jewelry'],
    id: 48,
    name: 'Rose gold'
  },
  {
    groups: ['Accessories'],
    id: 49,
    name: 'Hats'
  },
  {
    groups: ['Accessories'],
    id: 50,
    name: 'Scarves'
  },
  {
    groups: ['Accessories'],
    id: 51,
    name: 'Skinny belts'
  },
  {
    groups: ['Accessories'],
    id: 52,
    name: 'Wide belts'
  },
  {
    groups: ['Accessories'],
    id: 53,
    name: 'Clutches'
  },
  {
    groups: ['Accessories'],
    id: 54,
    name: 'Large Handbags'
  },
  {
    groups: ['Accessories'],
    id: 55,
    name: 'Medium Handbags'
  },
  {
    groups: ['Accessories'],
    id: 56,
    name: 'Small Handbags'
  }
]

const users = {
  chineduclientbucketcom: {
    email: 'chinedu@clientbucket.com',
    firstName: 'Chinedu',
    id: 'chineduclientbucketcom',
    lastName: 'Chukuigwe ',
    profile_picture: '',
    uid: 'km8J1oYrPYerQWXoJN20Nj3T1YE3',
    wardrope: [
      {
        favourite: true,
        id: 0,
        img:
          'https://firebasestorage.googleapis.com/v0/b/quinn-wardrobe-app.appspot.com/o/John%20Tunde%2Fimage00001.jpeg?alt=media&token=8ea7b2bd-7bb1-4ab7-851c-bac690e6a280',
        name: 'Bottom',
        tags: ['Casual', 'Business', 'Sports'],
        weather: 'Hot'
      },
      {
        favourite: true,
        id: 1,
        img:
          'https://firebasestorage.googleapis.com/v0/b/quinn-wardrobe-app.appspot.com/o/John%20Tunde%2Fimage00004.jpeg?alt=media&token=cfc03bb7-a886-43ea-a741-5d2d4ba07bf4',
        name: 'Top',
        tags: ['Casual'],
        weather: 'Hot'
      },
      {
        favourite: true,
        id: 2,
        img:
          'https://firebasestorage.googleapis.com/v0/b/quinn-wardrobe-app.appspot.com/o/John%20Tunde%2Fimage00006.jpeg?alt=media&token=97305682-7b6c-4af9-893e-5447f87d29db',
        name: 'Top',
        tags: ['Business'],
        weather: 'Hot'
      },
      {
        favourite: true,
        id: 3,
        img:
          'https://lh3.googleusercontent.com/pw/ACtC-3dc-zzYXjne8YMgbihgCZLvOcPfZjhqzHXcsGRriMsKbzxC0tyrCa9xm9OtmTW5j25_Lzd0hZQJRHdCXEEN92t2RZW3IFOa-q0Paq6wzDBG31GXA2biyZ46otbpbORU9-M926Yvn0_SHAsen3zPew8w=w618-h822-no',
        name: 'Top',
        tags: ['Business'],
        weather: 'Hot'
      },
      {
        favourite: true,
        id: 4,
        img:
          'https://firebasestorage.googleapis.com/v0/b/quinn-wardrobe-app.appspot.com/o/John%20Tunde%2Fimage00011.jpeg?alt=media&token=565bce56-7b03-4933-8d87-912e2a3e19ce',
        name: 'Bottom',
        tags: ['Sports'],
        weather: 'Hot'
      }
    ]
  }
}

export default [
  {
    name: 'Shoe 1',
    image: 'https://',
    type: 'shoe', // Jacket, Top, Pant, Dress, Jumpsuit, Romper, Skirt
    kind: 'flat', // heel
    box: [2, 3],
    color: 'neutral',
    season: ['spring'],
    occassion: ['business', 'casual']
  },
  {
    name: 'Shoe 2',
    image: 'https://',
    type: 'shoe',
    kind: 'heel',
    box: [2, 3],
    color: 'neutral',
    season: ['winter'],
    occassion: ['formal', 'business']
  },
  {
    name: 'Jacket',
    image: 'https://',
    type: 'jacket',
    kind: null,
    box: [1],
    color: 'black',
    season: ['spring'],
    occassion: ['business']
  },
  {
    name: 'Top 1',
    image: 'https://',
    type: 'top',
    kind: null,
    box: [1],
    color: 'white',
    season: ['spring', 'winter'],
    occassion: ['business']
  },
  {
    name: 'Top 2',
    image: 'https://',
    type: 'top',
    kind: null,
    box: [1],
    color: 'black',
    season: ['spring'],
    occassion: ['business']
  },
  {
    name: 'Pant 1',
    image: 'https://',
    type: 'pant', // Pant, Dress, Jumpsuit, Romper, Skirt
    kind: null, // heel
    box: [2],
    color: 'black',
    season: ['spring'],
    occassion: ['casual']
  },
  {
    name: 'Dress 1',
    image: 'https://',
    type: 'dress',
    kind: null,
    box: [2],
    color: 'purple',
    season: ['spring'],
    occassion: ['casual']
  },
  {
    name: 'Jumpsuit 1',
    image: 'https://',
    type: 'jumpsuit',
    kind: null,
    box: [1],
    color: 'red',
    season: ['winter'],
    occassion: ['casual']
  },
  {
    name: 'Romper 1',
    image: 'https://',
    type: 'romper',
    kind: null,
    box: [1],
    color: 'red',
    season: ['winter'],
    occassion: ['casual']
  },
  {
    name: 'Skirt 1',
    image: 'https://',
    type: 'skirt',
    kind: null,
    box: [2],
    color: 'warm',
    season: ['winter'],
    occassion: ['casual', 'business']
  },
  {
    name: 'Necklace 1',
    image: 'https://',
    type: 'accessory',
    kind: 'necklace',
    box: [4, 5, 6],
    color: null,
    season: ['summer'],
    occassion: ['casual', 'business']
  },
  {
    name: 'Skirt 1',
    image: 'https://',
    type: 'accessory',
    kind: 'earring',
    box: [4, 5, 6],
    color: null,
    season: ['summer'],
    occassion: ['business']
  },
  {
    name: 'Bag 1',
    image: 'https://',
    type: 'accessory',
    kind: 'bag',
    box: [4, 5, 6],
    color: 'warm',
    season: ['summer'],
    occassion: ['business']
  },
  {
    name: 'Scarves 1',
    image: 'https://',
    type: 'accessory',
    kind: 'scarves',
    box: [4, 5, 6],
    color: 'warm',
    season: ['summer'],
    occassion: ['business']
  }
]
