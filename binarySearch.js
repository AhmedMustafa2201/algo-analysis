const binarySearch = (arr, val) => {
    let low = 0, high = arr.length - 1

    while (low <= high) {
        let midPoint = Math.floor((low + high) / 2)

        if (val == arr[midPoint]) return midPoint

        if (val > arr[midPoint]) {
            low = midPoint + 1
        } else {
            high = midPoint - 1
        }
    }

    return -1
}

//////////////////////////////////////
const arr = [3, 4, 5, 6, 7, 8]
console.log(binarySearch(arr, 6))