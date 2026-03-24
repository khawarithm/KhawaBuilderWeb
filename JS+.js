window.customAddon = {

name: "JS+ PRO",

open: function(panel, selected){

panel.innerHTML = `
<b>JS+ PRO</b>
<button onclick="closePanel()">X</button>

<h4>Basic</h4>
<button class="panelbtn" onclick="js_alert()">Alert</button>
<button class="panelbtn" onclick="js_text()">Change Text</button>
<button class="panelbtn" onclick="js_toggle()">Toggle Show/Hide</button>
<button class="panelbtn" onclick="js_link()">Redirect</button>

<h4>Animation</h4>
<button class="panelbtn" onclick="js_fade()">Fade</button>
<button class="panelbtn" onclick="js_zoom()">Zoom</button>
<button class="panelbtn" onclick="js_rotate()">Rotate</button>

<h4>Logic</h4>
<button class="panelbtn" onclick="js_counter()">Click Counter</button>
<button class="panelbtn" onclick="js_delay()">Delay Action</button>

<h4>Style</h4>
<button class="panelbtn" onclick="js_randomColor()">Random Color</button>

<h4>Event</h4>
<button class="panelbtn" onclick="js_hover()">Hover Effect</button>
<button class="panelbtn" onclick="js_double()">Double Click</button>

<h4>Media</h4>
<button class="panelbtn" onclick="js_audio()">Play Audio</button>

<h4>Advanced 🔥</h4>
<button class="panelbtn" onclick="js_custom()">Custom Code</button>
<button class="panelbtn" onclick="js_reset()">RESET ALL</button>
`

/* ALERT */
window.js_alert = ()=>{
selected.onclick=()=>alert("JS+ aktif!")
}

/* TEXT */
window.js_text = ()=>{
let t=prompt("Teks baru:")
selected.onclick=()=>selected.innerText=t
}

/* TOGGLE */
window.js_toggle = ()=>{
selected.onclick=()=>{
if(selected.style.display=="none"){
selected.style.display="block"
}else{
selected.style.display="none"
}
}
}

/* LINK */
window.js_link = ()=>{
let url=prompt("Link:")
selected.onclick=()=>location.href=url
}

/* FADE */
window.js_fade = ()=>{
selected.onclick=()=>{
selected.style.transition="0.5s"
selected.style.opacity="0"
setTimeout(()=>selected.style.opacity="1",500)
}
}

/* ZOOM */
window.js_zoom = ()=>{
selected.onclick=()=>{
selected.style.transition="0.3s"
selected.style.transform="scale(1.3)"
setTimeout(()=>selected.style.transform="scale(1)",300)
}
}

/* ROTATE */
window.js_rotate = ()=>{
selected.onclick=()=>{
selected.style.transition="0.3s"
selected.style.transform="rotate(360deg)"
setTimeout(()=>selected.style.transform="rotate(0deg)",300)
}
}

/* COUNTER */
window.js_counter = ()=>{
let c=0
selected.onclick=()=>{
c++
selected.innerText="Klik: "+c
}
}

/* DELAY */
window.js_delay = ()=>{
selected.onclick=()=>{
setTimeout(()=>alert("Delay 2 detik"),2000)
}
}

/* RANDOM COLOR */
window.js_randomColor = ()=>{
selected.onclick=()=>{
selected.style.background=
"#"+Math.floor(Math.random()*16777215).toString(16)
}
}

/* HOVER */
window.js_hover = ()=>{
selected.onmouseover=()=>selected.style.transform="scale(1.1)"
selected.onmouseout=()=>selected.style.transform="scale(1)"
}

/* DOUBLE */
window.js_double = ()=>{
selected.ondblclick=()=>alert("Double Click!")
}

/* AUDIO */
window.js_audio = ()=>{
let url=prompt("Audio URL:")
let audio=new Audio(url)
selected.onclick=()=>audio.play()
}

/* CUSTOM CODE 🔥 */
window.js_custom = ()=>{
let code=prompt("Masukkan JS code:\nContoh: selected.style.color='red'")
selected.onclick=()=>{
try{
eval(code)
}catch(e){
alert("Error!")
}
}
}

/* RESET */
window.js_reset = ()=>{
selected.onclick=null
selected.onmouseover=null
selected.onmouseout=null
selected.ondblclick=null
selected.style=""
alert("Reset!")
}

}

}