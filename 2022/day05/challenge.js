let combinations = []

for( let i = 1; i <= maxCities; i++) {
  var combination = []
  for (var j = 0; j < giftsCities.length; j++) {

  }
}
console.log(combination)
combinations.push(combination)
}
console.log(combinations)
return Math.max(
  ...combinations.map( x => {
    let sum =  x.reduce((total, num) => total + num)
    return sum > maxGifts ? 0 : sum
  })
)