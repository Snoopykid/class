setTimeout(function() {
    console.log("Boom")
},3000)
// Boom
setInterval(function () {
    console.log("1초가 지났다")
},1000)
//  1초가 지났다
let time = 10
// undefined
setInterval(function() {
    if (time >= 0) {
        console.log(time)
        time = time - 1
    }
},1000)
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0