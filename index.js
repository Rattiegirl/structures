const {max,min,avg, filter, count, getDictionary} = require("./lib/NumberArray")

const arr = [1, 5, 3, -4, 2, 5,  43, 67, 4, 8, 4, 3, 8]

//////////console.log(max(arr))
//////////console.log(min(arr))
//////////console.log(avg(arr))
///////////console.log(filter(arr, "even"))
///////////console.log(filter(arr, "odd"))
///////////console.log(filter(arr, "div", 6))
///////////console.log(count(arr , 3))
console.log(getDictionary(arr))