
var canvas = createCanvas(m.width, m.height);
var i = 0;
canvas.setDefault();

var im = LoadImage("animation.png",200,200);
im.hide();
var pl;

function init(){
    pl = player(0,0);
}

window.addEventListener("DOMContentLoaded", ()=>{
    init();
});
canvas.update = function(){
    clearFrame();

    pl.update();

};
canvas.setFrames(24);