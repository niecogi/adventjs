function checkPart(part) {
  return part == part.split("").reverse()
  || [...part].filter((element, index)  => {
    let subString = part.substring(0, index) + part.substring(index + 1)
    return subString == [...subString].reverse().join("")
  }).length > 0 ? true : false
}