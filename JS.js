window.customAddon = {

name: "JS Basic",

open: function(panel, selected){

if(!selected){
panel.innerHTML += "<p>Pilih element dulu</p>"
return
}

panel.innerHTML = `
<b>JS Interaction</b>
<button onclick="closePanel()">X</button>

<button class="panelbtn" onclick="js_alert()">Klik → Alert</button>
<button class="panelbtn" onclick="js_text()">Klik → Ubah Text</button>
<button class="panelbtn" onclick="js_hide()">Klik → Hide</button>
<button class="panelbtn" onclick="js_show()">Klik → Show</button>
<button class="panelbtn" onclick="js_color()">Klik → Ganti Warna</button>
<button class="panelbtn" onclick="js_link()">Klik → Redirect</button>
<button class="panelbtn" onclick="js_audio()">Klik → Play Audio</button>
<button class="panelbtn" onclick="js_hover()">Hover Effect</button>
<button class="panelbtn" onclick="js_double()">Double Click</button>
<button class="panelbtn" onclick="js_reset()">Reset</button>
`

/* ALERT */
window.js_alert = function(){
selected.onclick = ()=> alert("Halo dari JS Addon!")
}

/* TEXT CHANGE */
window.js_text = function(){
let t = prompt("Teks baru:")
selected.onclick = ()=> selected.innerText = t
}

/* HIDE */
window.js_hide = function(){
selected.onclick = ()=> selected.style.display="none"
}

/* SHOW */
window.js_show = function(){
selected.style.display="block"
}

/* COLOR */
window.js_color = function(){
selected.onclick = ()=> selected.style.background="yellow"
}

/* LINK */
window.js_link = function(){
let url = prompt("Masukkan link:")
selected.onclick = ()=> location.href=url
}

/* AUDIO */
window.js_audio = function(){
let url = prompt("Masukkan link audio:")
let audio = new Audio(url)
selected.onclick = ()=> audio.play()
}

/* HOVER */
window.js_hover = function(){
selected.onmouseover = ()=> selected.style.transform="scale(1.1)"
selected.onmouseout = ()=> selected.style.transform="scale(1)"
}

/* DOUBLE */
window.js_double = function(){
selected.ondblclick = ()=> alert("Double Click!")
}

/* RESET */
window.js_reset = function(){
selected.onclick=null
selected.onmouseover=null
selected.onmouseout=null
selected.ondblclick=null
selected.style=""
alert("Reset!")
}

}

}