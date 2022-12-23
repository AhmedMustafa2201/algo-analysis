const sortedCharacterFrequencies = (message) => {
    const hashMap = {}
    for (let i = 0; i < message.length; i++) {
        if(hashMap.hasOwnProperty(message[i])){
            let oldVal = hashMap[message[i]]
            hashMap[message[i]] = oldVal + 1
        }else{
            hashMap[message[i]] = 1
        }
    }

    return Object.entries(hashMap)
        .sort((a, b) => b[1] - a[1])
        .map(el => console.log(`${el[0]}: ${el[1]}`))
}

let message = "hello world"

sortedCharacterFrequencies(message)