function printTable(gifts) {
  let table = ''
  let gift = 'Gift'
  let qty = 'Quantity'

  let maxGiftLen = Math.max(...gifts.map(x => {
    return x.name.length
  }), gift.length)

  let maxQtyLen = Math.max(...gifts.map(x => {
    return `${x.quantity}`.length
  }), qty.length)

  let restGift = maxGiftLen - gift.length
  let restQty = maxQtyLen - qty.length

  table = '+'.repeat((4 + maxGiftLen) + (3 + maxQtyLen)) + '\n'
  table += `| ${gift}` + `${' '.repeat(restGift < 0 ? 0 : restGift)} |`
  table += ` ${qty}` + `${' '.repeat(restQty < 0 ? 0 : restQty)} |` + '\n'
  table += `| ${'-'.repeat(maxGiftLen)} | ${'-'.repeat(maxQtyLen)} |` + '\n'

  gifts.forEach((gift) => {
    table += `| ${gift.name}`
      + `${' '.repeat(maxGiftLen - gift.name.length)} |`
    table += ` ${gift.quantity}` +
      `${' '.repeat(maxQtyLen - `${gift.quantity}`.length)} |` + '\n'
  })

  table += '*'.repeat((4 + maxGiftLen) + (3 + maxQtyLen))

  return table
}