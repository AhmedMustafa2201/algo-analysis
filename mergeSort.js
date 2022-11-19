const merge = (arr, start, midPoint, end) => {
  let i,j,k

  let leftArr = [...arr.slice(start, midPoint+1)]
  let rightArr = [...arr.slice(midPoint+1, end+1)]

  i = j = 0
  k = start
  while(i < leftArr.length && j < rightArr.length){
    if(leftArr[i] <= rightArr[j]){
      arr[k] = leftArr[i]
      i++
    } else {
      arr[k] = rightArr[j]
      j++
    }
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

// Time: O(n * log n)
const mergeSort = (arr, start, end) => {
  if(end <= start) return 
  
  let midPoint = Math.floor((end + start) / 2)
  
  mergeSort(arr, start, midPoint)
  mergeSort(arr, midPoint + 1, end)
  
  merge(arr, start, midPoint, end)
}

/////////////////////////////////////
let arr = [5,9,4,7,2,1]

console.log(arr)
mergeSort(arr, 0, arr.length - 1)
console.log(arr)
