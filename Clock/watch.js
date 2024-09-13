function play(){
    let timename = document.getElementById("time");
      const time = new Date();
      const m = time.getMinutes();
      const h = time.getHours();
      const s = time.getSeconds();
    timename.innerHTML = h.toString().padStart(2,'0')+":"+m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', (event) => {
    play();
    setInterval(play, 1000);
});
