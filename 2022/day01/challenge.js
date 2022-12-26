function wrapping(gifts) {
  let giftsWrapped = []

  for (let i = 0; i < gifts.length; i++){
    let paper = "*".repeat(gifts[i].length + 2)
    giftsWrapped.push(`${paper}\n*${gifts[i]}*\n${paper}`)
  }
  return giftsWrapped
}