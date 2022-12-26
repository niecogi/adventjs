function countHours(year, holidays) {
  let count = 0

  for(let holiday of holidays){
    const [month, day] = holiday.split('/')
    let date = new Date(+year, +month - 1, +day)
    let dayOfWeek = date.getDay()
    if(dayOfWeek !== 0 && dayOfWeek !== 6){
      count++
    }
  }
  return count * 2
}