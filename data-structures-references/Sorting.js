// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < (arr.length - i); j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j] 
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
} 

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let indexMin = i  
        for(let j = i + 1; i < arr.length; j++) {
            if(arr[indexMin] > arr[j]) {
                indexMin = j
            }
            if(arr[indexMin] !== i) {
                let temp = arr[indexMin]
                arr[indexMin] = arr[i]
                arr[j] = temp            
            }
        }
    }
    return arr
}

function mergeSort(arr) {
    if(arr.length === 1)
    return arr
    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)

    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    let arr = []
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}