// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = []                 //empty arrays

    for (let i = 0; i < n; i++) {   // new array for each n
        result.push([])
    }
    let counter = 1
    let startColum = 0
    let endColum = n - 1
    let startRow = 0
    let endRow = n - 1

    while(startColum <= endColum && startRow <= endRow) {

        // Top row
        for(let i = startRow; i <= endRow; i++) {
            result[startRow][i] = counter
            counter++
        }
        startRow++

        // Right column
        for(let i = startRow; i <= endRow; i++) {
            result[i][endColum] = counter
            counter++                                                                                                                                                                                                                                                        
        }
        endColum--

        // Bottom row
        for(let i = endColum; i>= startColum; i--) {
            result[endRow][i] = counter
            counter++
        }
        endRow--

        // Start Column
        for(let i = endRow; i>= startRow; i--) {
            result[i][startColum] = counter
            counter++
        }
        startColum++
    } 
    return result
}