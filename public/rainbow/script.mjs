import util from "../_files_/util.mjs";
util.betterand(10, 18);
const onerun = (10 / 8) * 1000;
let a = "";
let set = [];
setTimeout(() => {
    setInterval(() => {
        const plpr = util.betterand(7, 80);
        const ptpb = util.betterand(15, 80);
        let temp = `    
        --btrr${a}: ${util.betterand(10, 50)}%;
        --btlr${a}: ${util.betterand(10, 50)}%;
        --bbrr${a}: ${util.betterand(10, 50)}%;
        --bblr${a}: ${util.betterand(10, 50)}%;
        --pl${a}: ${plpr}px;
        --pr${a}: ${plpr}px;
        --pt${a}: ${ptpb}px;
        --pb${a}: ${ptpb}px;
        --fs${a}: ${util.betterand(60, 120)}px;
        --mt${a}: ${util.betterand(
            0,
            window.innerHeight - (144.8 + ptpb * 2)
        )}px;
        --ml${a}: ${util.betterand(
            0,
            window.innerWidth - (484.2 + plpr * 2)
        )}px;
        `;
        console.log("helloe");
        if (a == "") {
            set[0] = temp;
            a = "2";
        } else if (a == "4") {
            set[a - 1] = temp;
            a = "";
        } else {
            set[a - 1] = temp;
            a++;
        }
        document.getElementById("abc").style.cssText = set.join("");
    }, onerun);
}, onerun);
//}, 437.5);
