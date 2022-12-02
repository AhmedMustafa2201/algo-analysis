const merge = (arr, start, midPoint, end) => {
    let i,j,k
  
    let leftArr = [...arr.slice(start, midPoint + 1)]
    let rightArr = [...arr.slice(midPoint + 1, end + 1)]
  
    i = j = 0
    k = start

    while(i < leftArr.length && leftArr[i] <= 0){
        arr[k] = leftArr[i]
        i++
        k++
    }
  
    while(j < rightArr.length && rightArr[j] <= 0){
        arr[k] = rightArr[j]
        j++
        k++
    }

    while(i < leftArr.length){
      arr[k] = leftArr[i]
      i++
      k++
    }
  
    while(j < rightArr.length){
      arr[k] = rightArr[j]
      j++
      k++
    }
  }
  

const segregate = (arr, start, end) => {
    if(end <= start) return 

    let midPoint = Math.floor((end + start) / 2)

    segregate(arr, start, midPoint)
    segregate(arr, midPoint + 1, end)

    merge(arr, start, midPoint, end)
}


let arr = [6,-5,12,10,-9,-1]

console.log(arr)
segregate(arr, 0, arr.length - 1)
console.log(arr)
