function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return giftsCities.sort((a, b) => {
    return b - a
  })
    .reduce((acc, gift) => {
      if (maxCities !== 0
        && acc + gift <= maxGifts
        && acc + gift !== maxGifts - 1
      ) {
        acc += gift
        maxCities--
      }
      return acc

    }, 0)
}