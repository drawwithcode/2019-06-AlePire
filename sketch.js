
//CANVAS THAT CONTAINS MARIO'S DRAWING AND textSize(theSize)
var pag1a = function(pa){
  pa.setup = function(){

    //CREATION OF THE TITLE IN JS
    var title = pa.createElement("h1","COLOR SUPER MARIO!");
    title.position(20,0);

    //CREATION OF THE CANVAS
    var paq1 = pa.createCanvas(pa.windowWidth,pa.windowHeight);
    paq1.background(132,220,198);
    paq1.id("q1");
    pa.noStroke();

    //MARIO'S HAT
    pa.push();
    pa.fill('red');
    var c1 = pa.rect(100,100,20,20);
    var c2 = pa.rect(121,100,20,20);
    var c3 = pa.rect(142,100,20,20);
    var c4 = pa.rect(163,100,20,20);
    var c5 = pa.rect(79,121,20,20);
    var c6 = pa.rect(100,121,20,20);
    var c7 = pa.rect(121,121,20,20);
    var c8 = pa.rect(142,121,20,20);
    var c9 = pa.rect(163,121,20,20);
    var c10 = pa.rect(184,121,20,20);
    var c11 = pa.rect(205,121,20,20);
    pa.pop();

    //MARIO'S FACE
    pa.push();
    pa.fill('pink');
    var v1 = pa.rect(142,142,20,20);
    var v2 = pa.rect(184,142,20,20);
    var v3 = pa.rect(100,163,20,20);
    var v4 = pa.rect(121,163,20,20);
    var v5 = pa.rect(142,163,20,20);
    var v6 = pa.rect(184,163,20,20);
    var v7 = pa.rect(205,163,20,20);
    var v8 = pa.rect(121,184,20,20);
    var v9 = pa.rect(142,184,20,20);
    var v10 = pa.rect(163,184,20,20);
    var v12 = pa.rect(205,184,20,20);
    var v13 = pa.rect(226,184,20,20);
    var v11 = pa.rect(100,205,20,20);
    var v12 = pa.rect(121,205,20,20);
    var v13 = pa.rect(142,205,20,20);
    var v14 = pa.rect(100,226,20,20);
    var v15 = pa.rect(121,226,20,20);
    var v16 = pa.rect(142,226,20,20);
    var v17 = pa.rect(163,226,20,20);
    var v18 = pa.rect(184,226,20,20);
    pa.pop();

    //MARIO'S EYE AND MUSTACHE
    pa.push();
    pa.fill('black');
    var b1 = pa.rect(163,142,20,20);
    var b2 = pa.rect(163,163,20,20);
    var b3 = pa.rect(184,184,20,20);
    var b4 = pa.rect(163,205,20,20);
    var b5 = pa.rect(184,205,20,20);
    var b6 = pa.rect(205,205,20,20);
    pa.pop();

    //MARIO'S HAIR
    pa.push();
    pa.fill('brown');
    var p1 = pa.rect(121,142,20,20);
    var p2 = pa.rect(100,142,20,20);
    var p3 = pa.rect(79,142,20,20);
    var p4 = pa.rect(79,163,20,20);
    var p5 = pa.rect(79,184,20,20);
    var p6 = pa.rect(100,184,20,20);
    pa.pop();

    //TEXT FOR COLORS
    var hat = pa.createElement("p","HAT");
    hat.position(30,375);

    var hair = pa.createElement("p","HAIR");
    hair.position(30,435);

    var skin = pa.createElement("p","SKIN");
    skin.position(30,505);

    var txt1 = pa.createElement("p","Select the boxes to color your Mario. When you are done, press the button below to save it!");
    txt1.position(20,580);
    txt1.id('txtinizio');

    var buttonEnd = pa.createButton('TAKE A SCREEN!');
    buttonEnd.position(20, 680);
    buttonEnd.mousePressed(screenMario);
  }
}

//CANVAS CREATED TO BE A RESET BOTTON
var bota = function(ba){
  ba.setup = function(){
    var bottone1 = ba.createCanvas(200,50);
    bottone1.position(30,300);
    bottone1.background(255, 166,158);
    bottone1.mouseClicked(resetColori);
    bottone1.id("bottone");
    ba.textSize(10);
    ba.fill('white');
    var testo1 = ba.text("CLICK HERE TO RESET!", ba.width/5, ba.height/1.7);
  }
}

//RED BOTTON
var botr1 = function(br1){
  br1.setup = function(){
    var botros1 = br1.createCanvas(40,40);
    botros1.position(121, 390);
    botros1.background('red');
    botros1.mouseClicked(cappelloRosso);
    botros1.id("botRosso");
  }
}

//BLUE BOTTON
var botb1 = function(bb1){
  bb1.setup = function(){
    var botb1 = bb1.createCanvas(40,40);
    botb1.position(184, 390);
    botb1.background('blue');
    botb1.mouseClicked(cappelloBlu);
    botb1.id("botBlu");
  }
}

//GREEN BOTTON
var botv1 = function(bv1){
  bv1.setup = function(){
    var botv1 = bv1.createCanvas(40,40);
    botv1.position(247, 390);
    botv1.background('green');
    botv1.mouseClicked(cappelloVerde);
    botv1.id("botVerde");
  }
}

//BROWN HAIR BOTTON
var btb = function(btb1){
  btb1.setup = function(){
    var bottonebiondo = btb1.createCanvas(40,40);
    bottonebiondo.position(121, 453);
    bottonebiondo.background('brown');
    bottonebiondo.mouseClicked(capelliMarroni);
    bottonebiondo.id("botMarrone");
  }
}

//BLONDE HAIR BOTTON
var btba = function(btba1){
  btba1.setup = function(){
    var bottonemarrone = btba1.createCanvas(40,40);
    bottonemarrone.position(184, 453);
    bottonemarrone.background('yellow');
    bottonemarrone.mouseClicked(capelliBiondi);
    bottonemarrone.id("botBiondo");
  }
}

//PINK SKIN BOTTON
var btsk = function(btsk1){
  btsk1.setup = function(){
    var botspink = btsk1.createCanvas(40,40);
    botspink.position(121, 520);
    botspink.background('pink');
    botspink.mouseClicked(visoRosa);
    botspink.id("botRosa");
  }
}

//BROWN SKIN BOTTON
var btskm = function(btsk1m){
  btsk1m.setup = function(){
    var botsbrown = btsk1m.createCanvas(40,40);
    botsbrown.position(184, 520);
    botsbrown.background('brown');
    botsbrown.mouseClicked(visoScuro);
    botsbrown.id("botBrown");
  }
}

//VARIABLES TO DRAW THE SKETCHES
var pa1 = new p5(pag1a);
var ba1 = new p5(bota);

var br1a = new p5(botr1);
var bb1a = new p5(botb1);
var bv1a = new p5(botv1);

var btb1a = new p5(btb);
var btb1b = new p5(btba);

var btsk1a = new p5(btsk);
var btsk1am = new p5(btskm);


//FUNCTIONS TO COLOR MARIO
function resetColori(){
  var c1 = pa1.rect(100,100,20,20);
  var c2 = pa1.rect(121,100,20,20);
  var c3 = pa1.rect(142,100,20,20);
  var c4 = pa1.rect(163,100,20,20);
  var c5 = pa1.rect(79,121,20,20);
  var c6 = pa1.rect(100,121,20,20);
  var c7 = pa1.rect(121,121,20,20);
  var c8 = pa1.rect(142,121,20,20);
  var c9 = pa1.rect(163,121,20,20);
  var c10 = pa1.rect(184,121,20,20);
  var c11 = pa1.rect(205,121,20,20);

  var p1 = pa1.rect(121,142,20,20);
  var p2 = pa1.rect(100,142,20,20);
  var p3 = pa1.rect(79,142,20,20);
  var p4 = pa1.rect(79,163,20,20);
  var p5 = pa1.rect(79,184,20,20);
  var p6 = pa1.rect(100,184,20,20);

  var v1 = pa1.rect(142,142,20,20);
  var v2 = pa1.rect(184,142,20,20);
  var v3 = pa1.rect(100,163,20,20);
  var v4 = pa1.rect(121,163,20,20);
  var v5 = pa1.rect(142,163,20,20);
  var v6 = pa1.rect(184,163,20,20);
  var v7 = pa1.rect(205,163,20,20);
  var v8 = pa1.rect(121,184,20,20);
  var v9 = pa1.rect(142,184,20,20);
  var v10 = pa1.rect(163,184,20,20);
  var v12 = pa1.rect(205,184,20,20);
  var v13 = pa1.rect(226,184,20,20);
  var v11 = pa1.rect(100,205,20,20);
  var v12 = pa1.rect(121,205,20,20);
  var v13 = pa1.rect(142,205,20,20);
  var v14 = pa1.rect(100,226,20,20);
  var v15 = pa1.rect(121,226,20,20);
  var v16 = pa1.rect(142,226,20,20);
  var v17 = pa1.rect(163,226,20,20);
  var v18 = pa1.rect(184,226,20,20);
  pa1.fill('white');
  }

function cappelloRosso(){
  pa1.push();
  pa1.fill('red');
  var c1 = pa1.rect(100,100,20,20);
  var c2 = pa1.rect(121,100,20,20);
  var c3 = pa1.rect(142,100,20,20);
  var c4 = pa1.rect(163,100,20,20);
  var c5 = pa1.rect(79,121,20,20);
  var c6 = pa1.rect(100,121,20,20);
  var c7 = pa1.rect(121,121,20,20);
  var c8 = pa1.rect(142,121,20,20);
  var c9 = pa1.rect(163,121,20,20);
  var c10 = pa1.rect(184,121,20,20);
  var c11 = pa1.rect(205,121,20,20);
  pa1.pop();
}

function cappelloBlu(){
  pa1.push();
  pa1.fill('blue');
  var c1 = pa1.rect(100,100,20,20);
  var c2 = pa1.rect(121,100,20,20);
  var c3 = pa1.rect(142,100,20,20);
  var c4 = pa1.rect(163,100,20,20);
  var c5 = pa1.rect(79,121,20,20);
  var c6 = pa1.rect(100,121,20,20);
  var c7 = pa1.rect(121,121,20,20);
  var c8 = pa1.rect(142,121,20,20);
  var c9 = pa1.rect(163,121,20,20);
  var c10 = pa1.rect(184,121,20,20);
  var c11 = pa1.rect(205,121,20,20);
  pa1.pop();
}

function cappelloVerde(){
  pa1.push();
  pa1.fill('green');
  var c1 = pa1.rect(100,100,20,20);
  var c2 = pa1.rect(121,100,20,20);
  var c3 = pa1.rect(142,100,20,20);
  var c4 = pa1.rect(163,100,20,20);
  var c5 = pa1.rect(79,121,20,20);
  var c6 = pa1.rect(100,121,20,20);
  var c7 = pa1.rect(121,121,20,20);
  var c8 = pa1.rect(142,121,20,20);
  var c9 = pa1.rect(163,121,20,20);
  var c10 = pa1.rect(184,121,20,20);
  var c11 = pa1.rect(205,121,20,20);
  pa1.pop();
}

function capelliMarroni(){
  pa1.push();
  pa1.fill('brown');
  var p1 = pa1.rect(121,142,20,20);
  var p2 = pa1.rect(100,142,20,20);
  var p3 = pa1.rect(79,142,20,20);
  var p4 = pa1.rect(79,163,20,20);
  var p5 = pa1.rect(79,184,20,20);
  var p6 = pa1.rect(100,184,20,20);
  pa1.pop();
}

function capelliBiondi(){
  pa1.push();
  pa1.fill('yellow');
  var p1 = pa1.rect(121,142,20,20);
  var p2 = pa1.rect(100,142,20,20);
  var p3 = pa1.rect(79,142,20,20);
  var p4 = pa1.rect(79,163,20,20);
  var p5 = pa1.rect(79,184,20,20);
  var p6 = pa1.rect(100,184,20,20);
  pa1.pop();
}

function visoRosa(){
  pa1.push();
  pa1.fill('pink');
  var v1 = pa1.rect(142,142,20,20);
  var v2 = pa1.rect(184,142,20,20);
  var v3 = pa1.rect(100,163,20,20);
  var v4 = pa1.rect(121,163,20,20);
  var v5 = pa1.rect(142,163,20,20);
  var v6 = pa1.rect(184,163,20,20);
  var v7 = pa1.rect(205,163,20,20);
  var v8 = pa1.rect(121,184,20,20);
  var v9 = pa1.rect(142,184,20,20);
  var v10 = pa1.rect(163,184,20,20);
  var v12 = pa1.rect(205,184,20,20);
  var v13 = pa1.rect(226,184,20,20);
  var v11 = pa1.rect(100,205,20,20);
  var v12 = pa1.rect(121,205,20,20);
  var v13 = pa1.rect(142,205,20,20);
  var v14 = pa1.rect(100,226,20,20);
  var v15 = pa1.rect(121,226,20,20);
  var v16 = pa1.rect(142,226,20,20);
  var v17 = pa1.rect(163,226,20,20);
  var v18 = pa1.rect(184,226,20,20);
  pa1.pop();
}

function visoScuro(){
  pa1.push();
  pa1.fill('brown');
  var v1 = pa1.rect(142,142,20,20);
  var v2 = pa1.rect(184,142,20,20);
  var v3 = pa1.rect(100,163,20,20);
  var v4 = pa1.rect(121,163,20,20);
  var v5 = pa1.rect(142,163,20,20);
  var v6 = pa1.rect(184,163,20,20);
  var v7 = pa1.rect(205,163,20,20);
  var v8 = pa1.rect(121,184,20,20);
  var v9 = pa1.rect(142,184,20,20);
  var v10 = pa1.rect(163,184,20,20);
  var v12 = pa1.rect(205,184,20,20);
  var v13 = pa1.rect(226,184,20,20);
  var v11 = pa1.rect(100,205,20,20);
  var v12 = pa1.rect(121,205,20,20);
  var v13 = pa1.rect(142,205,20,20);
  var v14 = pa1.rect(100,226,20,20);
  var v15 = pa1.rect(121,226,20,20);
  var v16 = pa1.rect(142,226,20,20);
  var v17 = pa1.rect(163,226,20,20);
  var v18 = pa1.rect(184,226,20,20);
  pa1.pop();
}

function screenMario() {
  pa1.saveCanvas(pa1.paq1,'my mario!','jpeg');
}
