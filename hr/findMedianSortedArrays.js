var findMedianSortedArrays = function(nums1, nums2) {
    
    let newSortArr = nums1.concat(nums2).sort(function(a,b){return a - b})
    let middle = Math.floor(newSortArr.length / 2)
    
    for(let i = middle; i < newSortArr.length; i++) {
        
        if(newSortArr.length % 2 === 0) {
            
            return ((newSortArr[i - 1]+newSortArr[i])/2)

        } else {
        
        return newSortArr[i]
            
        }
    }
}