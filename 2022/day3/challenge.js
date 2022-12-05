function distributeGifts(packOfGifts, reindeers) {
  let weightGifts = 0
  let weightReindeers = 0
  for(let gift of packOfGifts) {
    weightGifts+= gift.length
  }
  for(let reindeer of reindeers) {
    weightReindeers+= reindeer.length * 2
  }

  return Math.floor(weightReindeers / weightGifts)
}