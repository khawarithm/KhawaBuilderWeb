window.customAddon = {

name: "HTML+ PRO",

open: function(panel, selected){

panel.innerHTML = `
<b>HTML+ Elements</b>
<button onclick="closePanel()">X</button>

<h4>Form</h4>
<button class="panelbtn" onclick="html_input()">Input Text</button>
<button class="panelbtn" onclick="html_password()">Password</button>
<button class="panelbtn" onclick="html_checkbox()">Checkbox</button>
<button class="panelbtn" onclick="html_radio()">Radio</button>
<button class="panelbtn" onclick="html_select()">Dropdown</button>
<button class="panelbtn" onclick="html_textarea()">Textarea</button>

<h4>UI</h4>
<button class="panelbtn" onclick="html_label()">Label</button>
<button class="panelbtn" onclick="html_switch()">Switch</button>
<button class="panelbtn" onclick="html_card()">Card</button>
<button class="panelbtn" onclick="html_divider()">Divider</button>

<h4>Advanced</h4>
<button class="panelbtn" onclick="html_form()">Form Template</button>
`

/* TARGET FIX */
function getTarget(){
let target = preview
if(selected && selected.querySelector(".container")){
target = selected.querySelector(".container")
}
return target
}

/* INPUT */
window.html_input = ()=>{
let target=getTarget()
create(`<input type="text" placeholder="Input text...">`)
}

/* PASSWORD */
window.html_password = ()=>{
create(`<input type="password" placeholder="Password">`)
}

/* CHECKBOX */
window.html_checkbox = ()=>{
create(`<label><input type="checkbox"> Pilihan</label>`)
}

/* RADIO */
window.html_radio = ()=>{
create(`<label><input type="radio" name="r"> Opsi</label>`)
}

/* SELECT */
window.html_select = ()=>{
create(`
<select>
<option>Option 1</option>
<option>Option 2</option>
</select>
`)
}

/* TEXTAREA */
window.html_textarea = ()=>{
create(`<textarea placeholder="Tulis sesuatu..."></textarea>`)
}

/* LABEL */
window.html_label = ()=>{
create(`<label contenteditable>Label</label>`)
}

/* SWITCH */
window.html_switch = ()=>{
create(`
<label style="display:flex;align-items:center;gap:10px;">
<input type="checkbox" style="width:40px;height:20px;">
<span>Switch</span>
</label>
`)
}

/* CARD */
window.html_card = ()=>{
create(`
<div style="padding:15px;border-radius:10px;background:#f2f2f2;">
<h3 contenteditable>Card Title</h3>
<p contenteditable>Isi card...</p>
</div>
`)
}

/* DIVIDER */
window.html_divider = ()=>{
create(`<hr>`)
}

/* FORM TEMPLATE */
window.html_form = ()=>{
create(`
<form>
<h3>Form</h3>
<input type="text" placeholder="Nama"><br><br>
<input type="email" placeholder="Email"><br><br>
<textarea placeholder="Pesan"></textarea><br><br>
<button type="submit">Kirim</button>
</form>
`)
}

}

}