const progressBar1 = document.getElementById('bar1');
const progressBar2 = document.getElementById('bar2');
var i=0;
var j=0;
const audio = new Audio("mixkit-fast-double-click-on-mouse-275.wav");

function updateProgressBar1() {
    i=i+0.5;
    const width1 = i + '%';

    progressBar1.style.width = width1;
     progressBar1.innerHTML = Math.round(i) +' votes';
     audio.play();

}
function updateProgressBar2() {
     j=j+0.5;
    const width1 = j + '%';

    progressBar2.style.width = width1;
     progressBar2.innerHTML = Math.round(j) +' votes';
     audio.play();

}
