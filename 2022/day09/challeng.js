function countTime(leds) {
  const ledsOff = leds.join('').split('1')
  ledsOff[0] += ledsOff.pop()
  return ledsOff.reduce((time, ledsOff) => {
    return Math.max(time, ledsOff.length * 7)
  }, 0)
}