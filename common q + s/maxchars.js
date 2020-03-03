// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let common = {}
    let answer = 0
    for(let char of str) {
        common[char] = (common[char] || 0) + 1
    }
    for(let key in common) {
        if(common[key] > answer) {
            answer = key
        } 
    }
    return answer
}