let grLoop;
let grPink;
let grBlue;
let title;
let random;

function preload() {
    grLoop = createImg('grLoop.gif');
    grPink = createImg('grPink.gif');
    grBlue = createImg('grBlue.gif');   
}

function clickFW(){
    grLoop.remove();
    title.remove();
    if(random === 1) {
        grPink.play();
    } else {
        grBlue.play();
    }
}

function setup(){
    noCanvas();
    title
    
}
