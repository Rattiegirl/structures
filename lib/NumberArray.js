const max = (arr) => {
    let maxAnswer = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxAnswer) {
            maxAnswer = arr[i]
        }
    }
    return maxAnswer
}

const min = (arr) => {
    let minAnswer = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minAnswer) {
            minAnswer = arr[i]
        }
    }
    return minAnswer
}
const avg = (arr) => {
    return _sum(arr) / arr.length

}

const _sum = (arr) => {
    let all = 0
    for (let i = 0; i < arr.length; i++) {
        all += arr[i]
    }
    return all
}

const filter = (arr, type, maybeCome) => {
    if (type === "even") {
        return arr.filter((number) => number % 2 === 0)
    }
    if (type === "odd") {
        return arr.filter((number) => number % 2 === 1)
    }
    if (type === "div") {
        return arr.filter((number) => number % maybeCome === 0)
    }
    return []
}

const count = (arr, honored) => {
    let winnerPodium = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === honored) {
            winnerPodium += 1
        }
    }
    return winnerPodium
}

const getDictionary = (arr) => {
    const calculator = {}
    for (let i = 0; i < arr.length; i++) {
        if (calculator[arr[i]]) {
            calculator[arr[i]] += 1
        } else {
            calculator[arr[i]] = 1
        }
    }
    return calculator
}





module.exports = { max, min, avg, filter, count, getDictionary }


