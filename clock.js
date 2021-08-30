function getTime() {
  
    const now = new Date()
    const hh = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    return `${hh}:${min}:${sec}`
}




// console.log(getTime());
// const time = setInterval(getTime, 1000);
// .innerText = time;

function tickClock(){
    document.getElementById('time').textContent =getTime();
}

setInterval(tickClock, 1000 );