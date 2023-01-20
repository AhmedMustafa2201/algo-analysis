const fractionalKnapsak = (weight, profits, maxCapacity) => {
    const weightLen = weight.length
    
    let formattedItems = []
    for (let i = 0; i < weightLen; i++)
        formattedItems.push(new Item(`#${i}`, profits[i], weight[i]))
    
    // let's act this sort as a merge sort
    formattedItems.sort((a, b) => b.ratio - a.ratio)

    let knapsak = new Knapsak(maxCapacity)

    let count = 0
    while (knapsak.currentCapacity < knapsak.maxCapacity) {
        knapsak.addItem(formattedItems[count++])
    }

    return knapsak.items
}

class Item{
    constructor(item, profit, weight){
        this.item = item
        this.profit = profit
        this.weight = weight
        this.ratio = profit / weight
    }
}

class Knapsak{
    constructor(maxCapacity){
        this.currentCapacity = 0
        this.maxCapacity = maxCapacity

        this.items = []
    }   

    addItem(newItem){
        const restAvailableWeight = this.maxCapacity - this.currentCapacity
        if(newItem.weight > restAvailableWeight){
            newItem.weight = restAvailableWeight
            newItem.profit = restAvailableWeight * newItem.ratio
        }

        this.items.push(newItem)
        this.currentCapacity += newItem.weight
    }
}

const profits = [4, 9, 12, 11, 6, 5]
const weights = [1, 2, 10, 4, 3, 5]

const maxCapacity = 12

console.log(fractionalKnapsak(weights, profits, maxCapacity))