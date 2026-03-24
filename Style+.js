window.customAddon = {

name: "Style+ PRO",

open: function(panel, selected){

if(!selected){
panel.innerHTML="<p>Pilih element dulu!</p>"
return
}

panel.innerHTML = `
<b>Style+ PRO</b>
<button onclick="closePanel()">X</button>

<h4>Color</h4>
<button class="panelbtn" onclick="st_gradient()">Gradient BG</button>
<button class="panelbtn" onclick="st_textGradient()">Gradient Text</button>
<button class="panelbtn" onclick="st_opacity()">Opacity</button>

<h4>Effects</h4>
<button class="panelbtn" onclick="st_shadow()">Shadow</button>
<button class="panelbtn" onclick="st_glow()">Glow</button>
<button class="panelbtn" onclick="st_blur()">Blur</button>
<button class="panelbtn" onclick="st_border()">Border</button>

<h4>Transform</h4>
<button class="panelbtn" onclick="st_rotate()">Rotate</button>
<button class="panelbtn" onclick="st_scale()">Scale</button>
<button class="panelbtn" onclick="st_skew()">Skew</button>

<h4>Modern UI 🔥</h4>
<button class="panelbtn" onclick="st_glass()">Glass Effect</button>
<button class="panelbtn" onclick="st_neon()">Neon Effect</button>
<button class="panelbtn" onclick="st_soft()">Soft UI</button>

<button class="panelbtn" onclick="st_reset()">RESET STYLE</button>
`

/* GRADIENT BG */
window.st_gradient = ()=>{
let c1=prompt("Warna 1:")
let c2=prompt("Warna 2:")
selected.style.background=`linear-gradient(45deg,${c1},${c2})`
}

/* TEXT GRADIENT */
window.st_textGradient = ()=>{
let c1=prompt("Warna 1:")
let c2=prompt("Warna 2:")
selected.style.background=`linear-gradient(45deg,${c1},${c2})`
selected.style.webkitBackgroundClip="text"
selected.style.color="transparent"
}

/* OPACITY */
window.st_opacity = ()=>{
let o=prompt("Opacity 0-1:")
selected.style.opacity=o
}

/* SHADOW */
window.st_shadow = ()=>{
let s=prompt("Shadow size (px):")
selected.style.boxShadow=`0 0 ${s}px rgba(0,0,0,0.5)`
}

/* GLOW */
window.st_glow = ()=>{
let c=prompt("Warna glow:")
selected.style.boxShadow=`0 0 20px ${c}`
}

/* BLUR */
window.st_blur = ()=>{
selected.style.backdropFilter="blur(10px)"
}

/* BORDER */
window.st_border = ()=>{
let w=prompt("Width px:")
let c=prompt("Color:")
selected.style.border=`${w}px solid ${c}`
}

/* ROTATE */
window.st_rotate = ()=>{
selected.style.transform="rotate(15deg)"
}

/* SCALE */
window.st_scale = ()=>{
selected.style.transform="scale(1.2)"
}

/* SKEW */
window.st_skew = ()=>{
selected.style.transform="skew(10deg)"
}

/* GLASS */
window.st_glass = ()=>{
selected.style.background="rgba(255,255,255,0.1)"
selected.style.backdropFilter="blur(10px)"
selected.style.border="1px solid rgba(255,255,255,0.2)"
}

/* NEON */
window.st_neon = ()=>{
let c=prompt("Warna neon:")
selected.style.color=c
selected.style.textShadow=`0 0 10px ${c},0 0 20px ${c}`
}

/* SOFT UI */
window.st_soft = ()=>{
selected.style.background="#e0e0e0"
selected.style.boxShadow="5px 5px 10px #aaa, -5px -5px 10px #fff"
}

/* RESET */
window.st_reset = ()=>{
selected.style=""
alert("Style direset!")
}

}

}