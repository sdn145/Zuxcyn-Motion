let imageEl=null;
$("importImage").onclick=()=>$("imageInput").click();
$("imageInput").onchange=e=>{const f=e.target.files[0];if(!f)return;pushHistory();if(imageEl)imageEl.remove();imageEl=document.createElement("img");imageEl.src=URL.createObjectURL(f);$("stage").appendChild(imageEl);$("stage").classList.add("has-image");Zuxcyn.state.mediaType="image";$("emptyStage").style.display="none";toast("Image ditambahkan")};
function applyTransform(){const x=+$("posX").value||0,y=+$("posY").value||0,s=(+$("scale").value||100)/100,r=+$("rotation").value||0,o=(+$("opacity").value||100)/100;const el=imageEl||video;el.style.transform=`translate(${x}px,${y}px) scale(${s}) rotate(${r}deg)`;el.style.opacity=o}
["posX","posY","scale","rotation","opacity"].forEach(id=>$(id).oninput=applyTransform);
