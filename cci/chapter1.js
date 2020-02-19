/* is Unique: implement an algorithm to determine i a sting has all unique characters. 
What if you cannot use additional data strcutres.
*/

function unique(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

/* Check Permutation: Given two strings, write a method to decide if one is a permutation
of the other. 
*/

function perm(s1,s2) {
    if(s1.length !== s2.length) {
        return false
    }
    let checker = {}
    for(let i of s1) {
        checker[i] = (checker[i] || 0) + 1
    }
    for(let char of s2) {
        if(char in checker) {
            checker[char]--
        }
        else {
            return false 
        }
    }
    return true
}

