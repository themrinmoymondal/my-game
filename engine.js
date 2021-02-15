
function createCanvas(w,h){
    var c = {};
    c.canvas = document.createElement("canvas");
    document.body.appendChild(c.canvas);
    c.canvas.width = w;
    c.canvas.height = h;
    c.context = c.canvas.getContext("2d");

    c.setFrames = function(frames){
        var f = frames == undefined ? 24 : frames;
        window.addEventListener("DOMContentLoaded",function(){
            function start(){
                c.update();
                requestAnimationFrame(start);
            }
            start();
        });
    }

    c.setDefault = function(){
        setCtx(c.context);
    }
    return c;
}

function setCtx(context){
        ctx = context;
}

function spriteAnimation(){}

function LoadImage(url, width, height,  parent){
    var json = {};

    var img = new Image();
    img.src = url;

    img.width = width;
    img.height = height;

    json.hide = function(){
        img.style.display = "none";
    }

    json.get = function(x,y){
        var an = {};
        an.img = new Image();
        an.img.style.background = "url('" + url + "') " + x + "px " + y + "px";
        console.log("url('" + url + "') " + x + "px " + y + "px");
        return an;
    }

    parent == undefined ? document.body.appendChild(img) : parent.appendChild(img);
    json.img = img;
    return json;
}

/*document.querySelectorAll('img').addEventListener((e)=>{
    e.addEventListener("load",()=>{

    });
});*/