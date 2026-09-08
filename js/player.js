const video=$("videoPreview"),seek=$("seekBar");
$("importVideo").onclick=()=>$("videoInput").click();
$("videoInput").onchange=e=>{const f=e.target.files[0];if(!f)return;pushHistory();Zuxcyn.state.mediaUrl=URL.createObjectURL(f);Zuxcyn.state.mediaType="video";video.src=Zuxcyn.state.mediaUrl;video.style.display="block";$("stage").classList.add("has-video");video.onloadedmetadata=()=>{Zuxcyn.state.duration=video.duration;updateTime()};toast("Video ditambahkan")};
$("playBtn").onclick=()=>{if(video.paused)video.play();else video.pause()};
video.onplay=()=>{$("playBtn").textContent="Ⅱ"};video.onpause=()=>{$("playBtn").textContent="▶"};
video.ontimeupdate=()=>{Zuxcyn.state.currentTime=video.currentTime;updateTime();$("playhead").style.left=(105+video.currentTime/Math.max(video.duration||1,1)*900)+"px"};
function updateTime(){const f=s=>{s=Math.max(0,s);return String(Math.floor(s/60)).padStart(2,"0")+":"+String(Math.floor(s%60)).padStart(2,"0")+"."+String(Math.floor((s%1)*100)).padStart(2,"0")};$("currentTime").textContent=f(Zuxcyn.state.currentTime);$("duration").textContent=f(Zuxcyn.state.duration);seek.value=Zuxcyn.state.duration?(Zuxcyn.state.currentTime/Zuxcyn.state.duration*100):0}
seek.oninput=()=>{if(video.duration)video.currentTime=seek.value/100*video.duration};
$("rewindBtn").onclick=()=>video.currentTime=Math.max(0,video.currentTime-1);
$("forwardBtn").onclick=()=>video.currentTime=Math.min(video.duration||1,video.currentTime+1);
