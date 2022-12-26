function sortToys(toys, positions) {
  return toys.sort((a, b) => {
    return positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
  })
}