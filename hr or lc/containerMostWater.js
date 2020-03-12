// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

// var maxArea = function(height) {
//     let volumeMax = 0
//     for (let i = 0; i < height.length; i++) {
//         for(let j = i + 1; i < height.length; j++) {
//             if(height[i] <= height[j] || height[i] >= height[j]) {
//                 let lowHeight = Math.min(height[j],height[i])
//                 let volume = lowHeight * (j - i)
//                 volumeMax = Math.max(volume, volumeMax)
//             } else {
//                 break
//             }
//         }
//     }
//     return volumeMax
// };
// O(n2)

var maxArea = function(height) {
    let volumeMax = 0, i = 0, j = height.length - 1
    while(i < height.length && j > 0) {
        let lowHeight = Math.min(height[i],height[j])
        let volume = lowHeight * (j - i)
        volumeMax = Math.max(volume, volumeMax)
        if(height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return volumeMax
}
//O(n)
console.log(maxArea([1,2,4,3]))

