$("importAudio").onclick=()=>$("audioInput").click();
$("audioInput").onchange=e=>{const f=e.target.files[0];if(!f)return;pushHistory();Zuxcyn.state.audioName=f.name;toast("Audio ditambahkan: "+f.name)};
