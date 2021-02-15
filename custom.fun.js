
var ctx;

const m = {
    width: window.innerWidth,
    height: window.innerHeight,
};

function color(c){
    ctx.fillStyle = c;
    ctx.fill();
}

function stroke(c){
    ctx.StrokeStyle = c;
    ctx.stroke();
}

function rect(x, y, w, h){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
}

function line(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}


function image(img, x, y, w, h){
    ctx.drawImage(img.img, x, y, w, h);
}

function clearFrame(){
    ctx.clearRect(0, 0, m.width, m.height);
}

function include(sn){
    var sc = document.createElement("script");
    sc.src = sn;
    document.body.appendChild(sc);
    document.body.insertBefore(sc, document.body.querySelectorAll('script')[2]);
}