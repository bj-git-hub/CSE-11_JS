let size = 16;
let show = true;
function changeHeading() {
    document.getElementById("heading").innerText =
        document.getElementById("input").value;
}

function changeBg() {
    document.body.style.background =
        "#" + Math.floor(Math.random()*16777215).toString(16);
}

function incFont() {
    size += 2;
    document.getElementById("para").style.fontSize = size + "px";
}

function togglePara() {
    show = !show;
    document.getElementById("para").style.display = show ? "block" : "none";
}

function reset() {
    location.reload();
}