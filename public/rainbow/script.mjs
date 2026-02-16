import util from "../_files_/util.mjs";
util.betterand(10, 18);
let a = "";
let set = []
setTimeout(() => {
    setInterval(() => {
        
        let temp = `    
        --btrr${a}: ${util.betterand(10, 50)}%;
        --btlr${a}: ${util.betterand(10, 50)}%;
        --bbrr${a}: ${util.betterand(10, 50)}%;
        --bblr${a}: ${util.betterand(10, 50)}%;
        --pl${a}: ${util.betterand(15, 80)}px;
        --pr${a}: ${util.betterand(15, 80)}px;
        --pt${a}: ${util.betterand(15, 80)}px;
        --pb${a}: ${util.betterand(15, 80)}px;
        --fs${a}: ${util.betterand(60, 120)}px;`;
        console.log("helloe");
        if (a == "") {
            set[0]= temp
            a = "2";
        }
        else if (a == "3") {
            set[a-1]= temp
            a = "";
        } else {
            set[a-1]=temp
            a++;
        }
        document.getElementById("abc").style.cssText = set.join("")
    }, 875);
}, 875);
//}, 437.5);
