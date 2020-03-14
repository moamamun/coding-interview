//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.



var longestPalindrome = function(s) {

    if(s.length <= 1) {
        return s
    }

    if(s.length === 2 && s[0] !== s[1]) {
        return s[0] || s[1]
    } else {
        return s
    }

    let prev = 0
    let next = 1
    let answer = ""
    
    while(next <= s.length) {
        
        let back = s.charAt(prev)
        let forward = s.charAt(next)

        if(forward === s.charAt(next+1)) {
            back = s.charAt(next)
            prev = next
            next = next + 1
            
        }
        
        if(back === forward) {
           
            let temp = s.substring(prev,next + 1)
            prev++
            next++
            
            if(temp.length > answer.length) {
            answer = temp
            }
        }
        else if(back !== forward) {
            next++
        }
        
    }
    return answer
};