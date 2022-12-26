function selectSleigh(distance, sleighs) {
  let selectedSleigh = null

  sleighs.forEach((sleigh) => {
    if(sleigh.consumption * distance <= 20){
      selectedSleigh = sleigh.name
    }
  })

  return selectedSleigh
}
