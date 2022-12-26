function createCube(size) {
  let topCube = ''
  let botCube = ''
  let lineBreak = '\n'
  for(let i = 1; i <= size; i++){
    topCube += " ".repeat(size - i)
      + "/\\".repeat(i)
      + "_\\".repeat(size)
      + lineBreak
    botCube += " ".repeat(i - 1)
      +  "\\/".repeat(size - ( i - 1))
      + "_/".repeat(size)
      + lineBreak
  }
  // slice => delete the last '\n'
  return topCube + botCube.slice(0,-1)
}