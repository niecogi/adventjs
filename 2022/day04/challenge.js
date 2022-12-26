function fitsInOneBox(boxes) {
  boxes.sort((a,b) => (a.l + a.w + a.h) - (b.l + b.w + b.h))
  for(let i = 0; i < boxes.length - 1; i++){
    let actualBox = boxes[i]
    let prevBox = boxes[i+1]
    if(actualBox.l >= prevBox.l || actualBox.w >= prevBox.w || actualBox.h >= prevBox.h){
      return false
    }
  }
  return true
}