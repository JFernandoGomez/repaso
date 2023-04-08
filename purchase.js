const data = `name,symbol,quantity,price,created_at
tony,appl,1,$23.00,2022-01-01
will,appl,2,$50.00,2022-01-02
brian,goog,1,$1000.00,2022-01-03
deb,msft,2,$50.00,2022-01-05
nik,appl,1,$100.00,2022-01-06
jose,appl,1,$10.00,2023-04-06`;

var shares = data.split("\n").slice(1)
var parsedShares = shares.map(
  share => {
    const splittedShare = share.split(',')
    return {
      name: splittedShare[0],
      symbol: splittedShare[1],
      quantity: parseInt(splittedShare[2]),
      price: parseFloat(splittedShare[3].replace("$",'')),
      created_at: splittedShare[4],
    }
  }
).sort((a,b)=> {
  if(a.price > b.price) return 1
  if(a.price < b.price) return -1
  return 0
})
//console.log(parsedShares)

function purchase( buyerName, qty, symbol ) {
  console.log({buyerName, qty, symbol})
  // filter by symbol
  //parsedShares.filter( share => share.symbol === symbol)
  //console.log(filteredShares)
  // try to fill the Qty requested
  var filledQty = 0
  var filledShares = []

  parsedShares.forEach(
    (share, index) => {
      if(share.symbol === symbol) {
        //console.log({share, filledShares})
        // take the share if available
        
        if(filledQty < qty && share.quantity > 0) {
          
          const remaining = qty - filledQty
          //console.log({remaining})
          
          // current Share amount is less than the remaining ? 
          
          if(remaining >= share.quantity) {
            filledShares = [...filledShares, share] // will have more than one?
            filledQty = filledQty + share.quantity
            parsedShares[index] = {
              ...share,
              quantity: 0,
            }
          } else {
            const takenShare = {...share, quantity: remaining}
            //console.log({takenShare})
            filledShares = [...filledShares, takenShare] // will have more than one?
            filledQty = filledQty + takenShare.quantity
            parsedShares[index] = {
              ...share,
              quantity: share.quantity - takenShare.quantity,
            }
          }
          
        }
        
      }
    }
  )
  //console.log({filledQty, filledShares})
  //console.log({parsedShares})

  const totalPrice = filledShares.reduce(
    (total, share) => {
      return total = total + share.price
    }
    , 0
  )
  
  // do the math
  return {filledQuantity: filledQty, totalPrice }
  
}

// shares for sale
// symbol => company


// purchase(buyerName: string, qty: number, symbol: string): {filledQuantity: number, totalPrice: number}
console.log(purchase("joe", 3, "appl"))
// purchase("joe", 3, "appl") => {filledQuantity: 3, totalPrice: 83.00}
// 1 x $10 (jose) + 1 x $23 (tony) + 1 x $50 (will) => $83
console.log(purchase("alice", 3, "appl"))
// purchase("alice", 3, "appl") => {filledQuantity: 2, totalPrice: 150.00}
// 1 x $50 (will) + 1 x $100 (nik) => $150
console.log(purchase("bob", 3, "appl"))
// purchase("bob", 3, "appl") => {filledQuantity: 0, totalPrice: 0.00}

