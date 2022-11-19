const insersionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        for(var j = i-1; j>=0; j--){
            if(arr[j] > key) arr[j+1] = arr[j]
            else break
        }
        arr[j+1] = key
    }
}

let arr = [5,9,4,7,2,1]

console.log(arr)
insersionSort(arr)
console.log(arr)
