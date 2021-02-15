var player = function(x, y){
    var v = {};
    img = LoadImage("animation.png", 96, 16);
    img.hide();

    var anim = [
        0,
        2,
        4
    ];

    var w = 96,
        h = 16,
        totalF = 6,
        cw = (w/totalF),
        ch = h,
        cx = 0,
        cy = 0,
        scl = 5,
        curframe = 0;

    v.setFrame = function(i){
        switch(i){
            case 0:
                cx = cw*anim[0] + (curframe * cw);
                break;
            case 1:
                cx = cw*anim[1] + (curframe * cw);
                break;
            case 2: 
                cx = cw*anim[2] + (curframe * cw);
                break;
        }


    } 

    v.seeKeyInput = function(event){
        var key_state = (event.type == "keydown") ? true : false;
        if(key_state){
            switch(event.keyCode){
                case 37: //Left
                    if(key_state) {
                        keys.left = true;
                        keys.right = false;
                        keys.rest = false;
                    }
                    break;
                case 39: //Right
                    if(key_state) {
                        keys.left = false;
                        keys.right = true;
                        keys.rest = false;
                    }
                    break;
                default:
                    keys.left = false;
                    keys.right = false;
                    keys.rest = true;
                    
            }
            keys.s = true;
        }else{
            keys.rest = true;
            keys.left = false;
            keys.right = false;
            keys.s = false;
        }
    }
    
    var keys = {
        s: false,
        right: false,
        left: false,
        rest: true
    }
    window.addEventListener("keydown",function(e){v.move(e);v.seeKeyInput(e)});
    window.addEventListener("keyup",function(e){v.move(e);v.seeKeyInput(e)});

    var i = 0;
    var dc = 0;

    v.move = function(e){
        var state = e.type == "keydown" ? true : false;
        var v = 1;
        if(state){ 
            switch(e.keyCode){
                case 39: // right
                    pv = v;
                    break;
                case 37: // left
                    pv = -v;
                    break;
                case 40: // up
                    py = v;
                    break;
                case 38: // down
                    py = -v;
                    break;
                default:
                    pv = 0;
                    py = 0;
                    break;
            }
        }else{
            pv = 0;
            py = 0;
        }

        //console.log(pv, py);
    }

    var pv = 0;
    var py = 0;
    v.update = function(){
        if(dc == 10) {
            curframe = (curframe+1) % 2;

            if(keys.s){
                if(keys.right){
                    i = 1;
                }else if(keys.left){
                    i = 2;
                }else if(keys.rest){
                    i = 0;
                }
            }else{
                i = 0;
            }
            dc = 0;
        }else{
            dc++;
        }
        
        //v.move();

        console.log(pv, py);
        x += pv;
        y += py;
        v.setFrame(i);

        ctx.drawImage(img.img, cx, cy, cw, ch, x, y, cw*scl, ch*scl);
    }
    return v;
}