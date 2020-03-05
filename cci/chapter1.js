/* is Unique: implement an algorithm to determine i a sting has all unique characters. 
What if you cannot use additional data strcutres.
*/
//1.1
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
//1.2
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

// Write a method to replace all spaces in a string wit '%20'...

// Ex Input:'Mr John Smith ', 13 
//    Output: 'Mr%20John%20Smith'

/*Think:: The whole concept of this could is to replace white spaces
 with '%20'
I believe in JS we can use the trim and replace /g method */ 

//1.3
function noSpace(str) {
    let newStr = str.trim().replace(/\s/g, "%20")
    return newStr
}

/* Now with no shortcuts
I believe the whole concept would be to loop through each charcter 
and if it's space/tab/anything, we want to replace it with %20 
*/
function answer2(str, truelength) { 
    let newStr = ''
    for(let i=0;i < truelength; i++) {
        let char = str[i]
        if(char === ' ') {
            newStr+='%20'
        } else {  
            newStr+=char
        }
    }
    return newStr
}

// console.log(answer2('Mr John Smith    ', 13))

//1.4

//Q: Palindrome Permution: Given  stringm write a function to check if its
//a permutation of a palindrome. 

const palindromePermutation = string => {
    const match = {}                    // our lookup
    for(let char of string) {
        if(!match[char]) {
            match[char] = 1
        } else {
            match[char] +=1
        }
    }
    for(let char in match) {            //make sure everything is even, but if odd only one copy exist
        let temp = 0
        if(match[char] % 2 !== 0) {
            temp++
        }
        if(temp > 1) {
            return false
        }
    }
    return true
}

//console.log(palindromePermutation('taco cat'))


//1.5

//Q: One Away: There are three types of edits that can be performed on strings: insert a char, remove a char, or replace
// given twoo strings write a function to ceck if they are one edit away

const oneAway = (str, edit) => {
    const dir = {}
    let count = 0
    for(let char of str) {
        dir[char] = dir[char] = 1 || dir[char] + 1
    }
    for(let char of edit) {
       if(char in dir) {
           dir[char] -- 
       }
       else count++
    }
    if(count > 1) {
        return false
    } else {
        return true
    }
}

console.log(oneAway('pale', 'bake'))

// I think I over complicated it with two for-loops, will come back and try a simplier approach. 

