const effectMap={blur:"blur(4px)",brightness:"brightness(1.25)",contrast:"contrast(1.35)",grayscale:"grayscale(1)",sepia:"sepia(1)",saturate:"saturate(2)",hue:"hue-rotate(80deg)",shadow:"drop-shadow(0 0 12px #a78bfa)"};
document.querySelectorAll(".effect-card").forEach(btn=>btn.onclick=()=>{pushHistory();const e=btn.dataset.effect;if(!Zuxcyn.state.effects.includes(e))Zuxcyn.state.effects.push(e);renderEffects();toast(e+" aktif")});
$("clearEffects").onclick=()=>{pushHistory();Zuxcyn.state.effects=[];renderEffects();toast("Effects direset")};
function renderEffects(){const s=Zuxcyn.state.effects.map(x=>effectMap[x]).join(" ");video.style.filter=s||"none";const img=document.querySelector("#stage img");if(img)img.style.filter=s||"none"}
