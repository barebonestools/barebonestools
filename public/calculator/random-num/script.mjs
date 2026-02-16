import util from "../../_files_/util.mjs"
const button=document.getElementById("result")
button.addEventListener("click",clickButt)
function clickButt(){
    const minimum = Number(document.getElementById("minimum").value)
    const maximum = Number(document.getElementById("maximum").value)
    const repeats = Number(document.getElementById("numbers").value)
    if (minimum>maximum||repeats<=0||minimum===""||maximum===""||minimum===0||maximum===0) {
        console.log("invalid inputs")
    }
    const thingy = (util.advRand(minimum,maximum,repeats)).join(", ")
    console.log(thingy)
    button.innerText=thingy
}
