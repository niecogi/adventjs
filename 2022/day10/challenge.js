function checkJump(heights) {
  let highestPoint = Math.max(...heights)
  let positionHighest = heights.indexOf(highestPoint)
  if (positionHighest === heights.length - 1 || positionHighest === 0) {
    return false
  }

  if (heights.every((element) => {
    return element == highestPoint
  })) {
    return false
  }

  for (let index = 1; index <= heights.length; index++) {
    let previous = heights[index - 1]
    let current = heights[index]

    if (index < positionHighest) {
      if (previous > current) {
        return false
      }
    } else if (index > positionHighest) {
      if (previous < current) {
        return false
      }
    }
  }
  return true
}