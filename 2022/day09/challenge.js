function countTime(leds) {
  let timer = 0

  while (leds.includes(0)){
    leds = leds.map((led, index, array) => {
      let prevLed = (index == 0)
        ? array[array.length - 1]
        : array[index - 1]

      return prevLed == 1 ?  1 : led
    })
    timer+= 7
  }
  return timer
}

/*
function countTime(leds) {
  let temp = leds
  temp.push(...temp)
  let count = 0
  let inARow = 0

  for (let i = 0; i < temp.length; i++) {
     if(temp[i] === 0) {
        count++
      } else {
        if(count > inARow) inARow = count
        count = 0
      }
    }
  return inARow * 7
  }
*/

/*
* function countTime(leds) { const ledsOff = leds.join('').split('1') ledsOff[0] += ledsOff.pop() return ledsOff.reduce( (time, ledsOff) => { return Math.max(time, ledsOff.length * 7) }, 0) }*/
