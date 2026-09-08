window.Zuxcyn={state:{duration:10,currentTime:0,mediaUrl:null,mediaType:null,effects:[],keys:[],text:"Zuxcyn Motion"},history:[],future:[]};
const $=id=>document.getElementById(id);
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove("show"),1800)}
function snapshot(){return JSON.stringify(Zuxcyn.state)}
function pushHistory(){Zuxcyn.history.push(snapshot());if(Zuxcyn.history.length>30)Zuxcyn.history.shift();Zuxcyn.future=[]}
function undo(){if(!Zuxcyn.history.length)return;Zuxcyn.future.push(snapshot());Object.assign(Zuxcyn.state,JSON.parse(Zuxcyn.history.pop()));renderState()}
function redo(){if(!Zuxcyn.future.length)return;Zuxcyn.history.push(snapshot());Object.assign(Zuxcyn.state,JSON.parse(Zuxcyn.future.pop()));renderState()}
function renderState(){if(window.renderEffects)renderEffects();if(window.renderKeys)renderKeys();if(window.updateText)updateText();if(window.applyTransform)applyTransform();$("projectName").textContent=Zuxcyn.state.mediaType?"Zuxcyn Motion — "+Zuxcyn.state.mediaType:"Untitled Project"}
document.querySelectorAll(".tab").forEach(tab=>tab.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active"));tab.classList.add("active");$("tab-"+tab.dataset.tab).classList.add("active")});
$("undoBtn").onclick=undo;$("redoBtn").onclick=redo;
$("menuBtn").onclick=()=>toast("Zuxcyn Motion • Editor Mode");
$("fitBtn").onclick=()=>toast("Preview disesuaikan");
$("fullscreenBtn").onclick=()=>document.documentElement.requestFullscreen?.();
$("addLayer").onclick=()=>toast("Layer baru dibuat");
