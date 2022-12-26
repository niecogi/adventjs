function checkStepNumbers(systemNames, stepNumbers) {
  let object = Object.assign ({},
    ...systemNames.map((name) => ({ [name]: [] }))
  )

  systemNames.forEach((name, index) => {
    object[name] = [...object[name], stepNumbers[index]]
  })

  return Object.values(object).every(o =>{
    return o.slice(1).every((next, i) =>{
      return next >= o[i]
    })
  })
}