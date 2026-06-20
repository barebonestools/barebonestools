import util from "../../_files_/util.mjs"
const result=document.getElementById("result")
const capybara = document.getElementById("capy")
capybara.addEventListener("click",capyToBoard)
document.getElementById("bigbutt").addEventListener("click",clickButt)
let thingy
function clickButt(){
    const minimum = Number(document.getElementById("minimum").value)
    const maximum = Number(document.getElementById("maximum").value)
    const repeats = Number(document.getElementById("numbers").value)
    result.classList.add("show")
    if (minimum>maximum||repeats<=0||minimum===""||maximum==="") {
        result.innerText="Invalid inputs!"
    }
    else{
    thingy = (util.advRand(minimum,maximum,repeats)).join(", ")
    console.log(thingy)
    result.innerText=thingy
    }
    capybara.innerText = "Copy to clipboard"
}
function capyToBoard(){
    let copied
    if (thingy===undefined||thingy==="") {
        capybara.innerText = "Nothing to copy!"
        copied = false
    }
    else{
        //navigator.clipboard.writeText(thingy)
        console.log(thingy)
        capybara.innerText = "Copied!"
        //capybara.classList.remove("wappon")
        copied = true
    }
    capybara.classList.add("wappoffy")
    setTimeout(()=>{
        if(copied){
            capybara.innerText = "Copy again"
        }else{
            capybara.innerText = "Copy to clipboard"
        }
        capybara.classList.add("fade")
        capybara.classList.remove("wappoffy")
        setTimeout(()=>{
            capybara.classList.remove("fade")
        },1100)
    },1500)
}
