// Mouse Events in JS
// 1. onclick
// 2. onmouseover
// 3. onmouseout
// 4. onmousedown
// 5. onmouseup
// 6. onmousemove
// 7. ondoubleclick

function onClick(){
    alert("Clicked");
}

function onMouseMove(){
    console.log("on mouse move");
}

function onMouseOut(){
    console.log("on mouse out");
}

function onMouseUp(){
    console.log("on mouse up")
}

function onMouseDown(){
    console.log("on mouse down");
}

function onMouseOver(){
    console.log("on mouse over");
    
}

// Keyboard events
// 1. onkeyup
// 2. onkeydown
// 3. onkeypress

//Form events
// 1. onfocus
// 2. onsubmit
// 3. onblur
// 4. onchange

const x = document.querySelector('input');
x.addEventListener('focus', onhandlefocus);
x.addEventListener('blur', onhandleblur)

function onhandleblur(){
    x.style.background = "red";
}

function onhandlefocus(){
     x.style.background = "green";
}

// Window events
//1.on load
//2.on unload
//3.on resize
//4.on scroll

function onLoad(){
    alert("Page is loaded.");
}
