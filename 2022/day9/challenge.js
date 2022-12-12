function countTime(leds) {
  let timer = 0

  while (leds.includes(0)){
    leds = leds.map((led, index, array) => {
      let prevLed = (index == 0)
        ? array[array.length - 1]
        : array[index - 1]

      if(prevLed == 1) {
        return 1
      }
      return led
    })
    timer+= 7
  }
  return timer
}