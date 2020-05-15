var intToRoman = function(num) {
    let symbol = ''
    let map = {
        1:'I',
        5:'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    }
    if(num === null || num === undefined) return false
    if(map.has(num)) console.log(map.get(num))
    for(let i = 0; i < num.split('').length; i++) {
        if(num.length === 1) {
            if(num[i] === 4) {
                symbol += map[1] + map[5]
            } else if(num[i] === 9) {
                symbol += map[1] + map[10]
            } else if(num[i] > 5){
                symbol += map[5]
                let temp = num - num[i]
                if(temp !== 1) {
                    symbol += map[1]
                }
            }
        }
        if(num.length === 2)
        if(num.length === 3)
    }
    
};