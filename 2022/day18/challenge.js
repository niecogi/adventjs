function dryNumber(dry, numbers) {
  return Array.from({length: numbers}, (_, i) => i+1).filter(number => {
    return number.toString().includes(dry)
  })
}