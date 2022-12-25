class Node
{
    constructor(data, freq)
    {
        this.data = data;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

const countHashMap = {}

const generateCodes = (node, str) => {
    if(node == null) return

    if(node.data != "0"){
        countHashMap[node.data] = str
    }

    generateCodes(node.left, str + "0")
    generateCodes(node.right, str + "1")
}

const specialSorting = (a, b) => {
    const res = a.freq - b.freq
    if(res !== 0) return res

    if(a.data === "0" && b.data === "0") return res
    if(a.data === "0" || b.data === "0") return a.data.charCodeAt(0) - b.data.charCodeAt(0)

    return res
}

const huffmanCoding = (message) => {
    const hashMap = {}
    for (let i = 0; i < message.length; i++) {
        if(hashMap.hasOwnProperty(message[i])){
            let oldVal = hashMap[message[i]]
            hashMap[message[i]] = oldVal + 1
        }else{
            hashMap[message[i]] = 1
        }
    }

    const priorityQueue = []
    for (const data of Object.keys(hashMap)) {
        priorityQueue.push(new Node(data, hashMap[data]))
    }

    // priorityQueue.sort((a, b) => a.freq - b.freq)
    let top, left, right, newFreq;
    while (priorityQueue.length > 1) {
        priorityQueue.sort(specialSorting)

        left = priorityQueue.shift()
        right = priorityQueue.shift()

        newFreq = left.freq + right.freq

        top = new Node("0", newFreq)
        top.left = left
        top.right = right

        priorityQueue.unshift(top)
    }


    generateCodes(priorityQueue[0], "")

    Object.entries(countHashMap)
        .map(el => console.log(`${el[0]}: ${el[1]}`))
}

let msg = "internetinternet"

huffmanCoding(msg)