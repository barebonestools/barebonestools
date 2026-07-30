import util from "../_files_/util.mjs"
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasize = window.innerHeight + window.innerWidth + 8;
canvas.width = canvasize;
canvas.height = canvasize;
const r = util.simplrand
function drawStripes(){
    // debugger;
    const step = 100;
    // const step = 4;
    let left = 0;
    let leftnew= 0  + step;
    let top = 0;
    let topnew = 0 + step;
    let color
    while(leftnew <= canvas.height && topnew <= canvas.width){
        ctx.beginPath();
        debugger;
        // color = `rgb(${r(255)}, ${r(255)}, ${r(255)})`;
        color = `rgb(${r(255)}, ${r(255)}, ${r(255)})`;
        ctx.fillStyle = color;
        ctx.moveTo(top,0)
        ctx.lineTo(topnew,0);
        ctx.lineTo(0,leftnew);
        ctx.lineTo(0,left)
        ctx.closePath();
        ctx.fill();
        left = leftnew
        top = topnew
        leftnew = left + step;
        topnew = top + step;
    }
}
drawStripes();