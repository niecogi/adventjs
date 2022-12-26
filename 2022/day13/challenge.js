function getFilesToBackup(lastBackup, changes) {
  let filesToBackup = []
  changes.sort((a,b) => {
    return a[0] - b [0]
  })
  changes.forEach((change, array) => {
    if(parseInt(change[1]) > parseInt(lastBackup) ){
      filesToBackup.push(change[0])
    }
  })
  let dataArr = new Set(filesToBackup)
  return [...dataArr]
}