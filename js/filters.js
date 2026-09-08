function updateText(){const o=$("textOverlay");o.textContent=Zuxcyn.state.text;o.style.fontSize=(+$("textSize").value||42)+"px";o.style.fontWeight=$("textWeight").value;o.style.position="absolute";o.style.color="#fff";o.style.textShadow="0 2px 10px #000";o.style.left="50%";o.style.top="50%";o.style.transform="translate(-50%,-50%)";o.style.pointerEvents="none"}
$("addText").onclick=()=>{document.querySelector('[data-tab="text"]').click();$("textInput").focus();toast("Text layer dipilih")};
$("applyText").onclick=()=>{pushHistory();Zuxcyn.state.text=$("textInput").value;updateText();toast("Text diterapkan")};
$("textInput").oninput=()=>{Zuxcyn.state.text=$("textInput").value;updateText()};
$("textSize").oninput=updateText;$("textWeight").onchange=updateText;updateText();
