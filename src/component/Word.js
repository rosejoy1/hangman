var COLORS = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "brown",
    "chocolate",
    "crimson",
    "orange",
    "gold",
    "pink",
    "plum",
    "wheat"
  ];
  

  let ANIMALS = [
    'lion',
    'cow',
    'shark',
    'rabbit',
    'monkey',
    'goat',
    'koala',
    'tiger',
    'panda',
    'bear',
    'horse',
    'lizard',
    "zebra"
  ]
  
  let COUNTRIES = [
    'france',
    'china',
    'spain',
    'italy',
    'canada',
    "india",
    'peru',
    'brasil',
    'argentina',
    'colombia',
    'mexico',
    'japan',
    'thailand',
    'england',
    'israel',
    "egypt",
    "russia"
  ]
  let FLOWERS=[
    "rose",
    "lily",
    "sunflower",
    "daisy",
    "lotus",
    "lavender",
    "hibiscus"
  ]
  
    function randomWord(type=COLORS) {
      switch (type) {
        case 'animals':
          return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  
        case 'countries':
          return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];

          case 'flowers':
            return FLOWERS[Math.floor(Math.random() * FLOWERS.length)];

        
        

        default:
          return COLORS[Math.floor(Math.random() * COLORS.length)];
      }
    }
    
    export { randomWord };





