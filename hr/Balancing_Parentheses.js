function getMin(s) { 
    let balance = 0
    let answer = 0
    for(let char of s) {
        if(char === '(') {
            balance++
        }
        else{
            balance--
        }
        if(balance === -1){
            answer++
            balance++
        }

    }
    return  answer + balance
}

console.log(getMin('()))'))