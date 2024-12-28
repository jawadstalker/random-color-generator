const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.getElementById("color")
let x = ""
let t = []
let p = "rgba("




btn.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        const randomnumber = getrandomnumber()
        t[i] = x

        if (i === 2) {
            p += x + ")"
        } else {
            p += x + ","
        }
        x = ""

    }

    document.body.style.backgroundColor = p
    color.textContent = p
    p = "rgba("


})
let min = 0
let max = 170

function getrandomnumber(min, max) {
    for (let i = 0; i < 3; i++) {
        x += Math.floor(Math.random() * 5)
    }
    return x



}