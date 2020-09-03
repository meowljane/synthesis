go();
window.addEventListener('resize', go);

function go(){
if(document.documentElement.clientHeight<=100){ changeimage() ;return false}}

function changeimage(){
var img1 = document.getElementById("img1");
img1.src="./합성노트2.gif"}