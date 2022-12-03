const activitySelection = (startArr, endArr) => {
    let i, j = 0
    let results = [0]

    for (i = 1; i < startArr.length; i++) {
        if(endArr[j] <= startArr[i]){
            results.push(i)
            j = i
        }
    }
    return results
}

let startArr = [9,10,11,12,13,15], 
    endArr   = [11,11,12,14,15,16];

const sessionsList = activitySelection(startArr, endArr)

console.log(sessionsList)