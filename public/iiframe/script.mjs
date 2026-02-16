const createNestedIFrames = (count) => {
    let container = document.body;
    for (let i = 0; i < count; i++) {
        const iframe = document.createElement("iframe");
        iframe.style.width = "90%";
        iframe.style.height = "90%";
        iframe.style.border = "1px solid black";
        container.appendChild(iframe);
        container = iframe.contentDocument.body;
    }
};

const input = document.createElement("input");
input.type = "number";
input.placeholder = "Number of iframes";
input.min = "1";

const button = document.createElement("button");
button.textContent = "Create";
button.onclick = () => {
    const count = parseInt(input.value, 10);
    if (!isNaN(count) && count > 0) {
        createNestedIFrames(count);
    }
};

document.body.insertBefore(input, document.body.firstChild);
document.body.insertBefore(button, input.nextSibling);