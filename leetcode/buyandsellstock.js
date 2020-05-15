// Buy stock and sell at the best profit
// example input: [7,1,5,3,6,4] Output:5
// explanation: buy on day 2 and sell on day 5 6-1 = 5

const bestProfit = (arr) => {

  let low = Infinity 
  let profit = 0

  for(let i = 0; i < arr.length; i++) {
    if(low > arr[i]) {
        low  = arr[i]
    }
    profit = Math.max(arr[i] - low, profit)
  }
return profit
}

console.log(bestProfit([7,1,5,3,6,4]))
console.log(bestProfit([2,10,1,5,3,6,4]))