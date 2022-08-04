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
module.exports = { max, min, avg }

