function carryGifts(gifts, maxWeight) {
  let bags = []
  let weightBag = 0
  let bag = ''

  gifts.forEach((gift) => {
    let weightGift = gift.length
    if (weightGift <= maxWeight) {
      if (weightGift + weightBag <= maxWeight) {
        bag.length === 0
          ? bag = gift
          : bag += ' ' + gift
      } else {
        bags.push(bag)
        weightBag = 0
        bag = '' + gift
      }
      weightBag += weightGift
    }
  })

  if (bag.length !== 0) {
    bags.push(bag)
  }
  return bags
}