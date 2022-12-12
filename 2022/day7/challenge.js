function getGiftsToRefill(a1, a2, a3) {
  let stores =  [...new Set([...a1, ...a2, ...a3])]
  let giftsToReplenish = []

  giftsToReplenish = stores.filter( gift =>
    a1.includes(gift) +
    a2.includes(gift) +
    a3.includes(gift)
    === 1
  )

  return [...giftsToReplenish]
}