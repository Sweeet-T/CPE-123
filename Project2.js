var facex
var facey 
var moveface
var orangex
var orangey
var moveorange
var rotorange
var scaleorange = .2
var scaleface = .15

var swanx;
var swany;
var eye;
var gray=(208,206,214);
var scaletree=.5;

var moveswan
var rotswan

var counter = 0

var orangeon = false

var floodheight = 0
var flood = false

deadon = false

function setup() 
{
   createCanvas(800, 700);
   facex = 0
   facey = 0
   moveface = false
   rotface = 0

   orangex = 0
   orangey = 0
   moveorange = false
   rotorange = 0

   swanx = 270
   swany = 210
   moveswan=false
   swan2x = 100
   swan2y = 100
   swan2move = false
   swan3x = 100
   swan3y = 100
   colorswan = false
}


function draw() 
{
  if (moveface)
  {
    facex += 23
  }
  if (facex >= 281)
  {
    moveface = false
  }

  if (moveswan)
  {
    swanx -= 55
  }  
  if (swanx <= -400)
  {
    moveswan = false
  }  


//background
 background(255)
 noStroke();
 fill(77,150,133,150);
 rect(0, 120, width, height)

 fill(29,123,0);
 quad(0,110,800,110,800,130,0,130);

if (orangeon)
{
    orange(orangex + 65, orangey + 380, rotorange, scaleorange)
}
else 
{
    trumphead(facex-120, facey+400, rotface, scale)
}
 

 if (flood)
   {
   floodheight += 15
   fill(0)
   rect(-1, 0, width, floodheight)
   }  

 if (swan2move)
 {
  swan2(swan2x+350, swan2y+220, -PI/4)
 }
 else
 {
  swan(swanx + 700, swany)
 } 

 if (colorswan)
 {
  orangeswan(swan3x+855, swan3y+ 110)
 }
 
//bigtreebrown
  push();
      beginShape();
         fill(97,58,0);
         rect(25,75,10,40);
      endShape();
  pop();
 
 
//bigtreegreen
push();
  beginShape();
      fill(24,135,0);
      vertex(50,80);
      vertex(35,80);
      vertex(25,75);
      vertex(20,80);
      vertex(10,60);
      vertex(15,10);
      vertex(30,5);
      vertex(50,10);
      vertex(40,30);
      vertex(45,40);
      vertex(55,50);
  endShape();
pop();
 
 
//last tree
  push();
   translate(350,60);
   scale(scaletree);
   //brown
   push();
      beginShape();
         fill(97,58,0);
         rect(25,75,10,40);
      endShape();
   pop();
 
   //green
      push();
            beginShape();
               fill(24,135,0);
               vertex(50,80);
               vertex(35,80);
               vertex(25,75);
               vertex(20,80);
               vertex(10,60);
               vertex(5,10);
               vertex(30,5);
               vertex(50,10);
               vertex(60,30);
               vertex(65,40);
               vertex(55,50);
            endShape();
      pop();

 
 
//second tree
  push();
   translate(320,60);
   scale(scaletree);
   //brown
   push();
      beginShape();
         fill(97,58,0);
         rect(25,75,10,40);
      endShape();
   pop();
 
   //green
      push();
            beginShape();
               fill(24,135,0);
               vertex(70,70);
               vertex(45,80);
               vertex(35,75);
               vertex(20,80);
               vertex(10,60);
               vertex(0,10);
               vertex(20,5);
               vertex(50,10);
               vertex(60,30);
               vertex(65,40);
               vertex(55,50);
            endShape();
      pop();
  pop();


   if (deadon)
 {
  dead(100, 100)
 }

}

function swan(swanx, swany)
{
  push()
  translate(swanx, swany)
  //ripples
  fill(77,150,228,90);
   ellipse(200,300,300,70);

   fill(77,150,207,90);
   ellipse(200,300,350,90);

   fill(77,150,189,90);
   ellipse(200,300,400,100);

   fill(77,150,171,90);
   ellipse(200,300,450,120);

   fill(77,150,152,90);
   ellipse(200,300,550,140);

   fill(77,150,133,90);
   ellipse(200,300,700,160);


   push()
   translate(swanx,swany)

   //swanneck
   beginShape();
     fill(gray);
     curveVertex(-175,-147);
     curveVertex(-170,-147);
     curveVertex(-165,-147);
     curveVertex(-160,-145);
     curveVertex(-155,-143);
     curveVertex(-135,-130);
     curveVertex(-120,-110);
     curveVertex(-115,-70);
     curveVertex(-125,-40);
     curveVertex(-140,-10);
     curveVertex(-150,10);
     curveVertex(-155,20);
     curveVertex(-160,30)
     curveVertex(-165,40)
     curveVertex(-190,50)
     curveVertex(-200,55)
     curveVertex(-210,60)
     curveVertex(-227,80)
     curveVertex(-215,30)
     curveVertex(-190,-10)
     curveVertex(-155,-70);
     curveVertex(-155,-80)
     curveVertex(-155,-90);
     curveVertex(-170,-105);
     curveVertex(-200,-87);
     curveVertex(-222,-90);
     curveVertex(-230,-105);
     curveVertex(-215,-127);
     curveVertex(-200,-140);
     curveVertex(-210,-150);
  endShape(); 
 
 
//swanbody
  beginShape();
     fill(gray);
     curveVertex(-170,40);
     curveVertex(-140,20);
     curveVertex(-110,0);
     curveVertex(-90,-10);
     curveVertex(-70,-15);
     curveVertex(-40,-20);
     curveVertex(-10,-15);
     curveVertex(30,-10);
     curveVertex(50,10);
     curveVertex(70,40);
     curveVertex(90,50);
     curveVertex(70,65);
     curveVertex(55,80);
     curveVertex(30,110);
     curveVertex(-40,110);
     curveVertex(-85,110);
     curveVertex(-147,98);
     curveVertex(-180,95);
     curveVertex(-222,85);
     curveVertex(-225,60);
  endShape(CLOSE);
 
 
 
 
 
  //beak
  beginShape();
 
     fill(209,201,22);
     curveVertex(-225,-100);
     curveVertex(-222,-96);
     curveVertex(-220,-92);
    curveVertex(-215,-86);
     curveVertex(-220,-80);
     curveVertex(-227,-74);
     curveVertex(-232,-68);
     curveVertex(-240,-60);
     curveVertex(-237,-70);
     curveVertex(-235,-82);
     curveVertex(-230,-89);
 
  endShape(CLOSE);
 
 
     //small swan eye
     fill(255);
     ellipse(-210,-110,12);
     fill(0);
     ellipse(-210,-110,10);
     fill(255);
     ellipse(-213,-107,3);

  pop()
  pop()

}

function orangeswan(swan3x, swan3y)
{
  push()
  translate(swan3x, swan3y)
   push()
   translate(swanx,swany)

   //swanneck
   beginShape();
     fill(255, 94, 20)
     curveVertex(-175,-147);
     curveVertex(-170,-147);
     curveVertex(-165,-147);
     curveVertex(-160,-145);
     curveVertex(-155,-143);
     curveVertex(-135,-130);
     curveVertex(-120,-110);
     curveVertex(-115,-70);
     curveVertex(-125,-40);
     curveVertex(-140,-10);
     curveVertex(-150,10);
     curveVertex(-155,20);
     curveVertex(-160,30)
     curveVertex(-165,40)
     curveVertex(-190,50)
     curveVertex(-200,55)
     curveVertex(-210,60)
     curveVertex(-227,80)
     curveVertex(-215,30)
     curveVertex(-190,-10)
     curveVertex(-155,-70);
     curveVertex(-155,-80)
     curveVertex(-155,-90);
     curveVertex(-170,-105);
     curveVertex(-200,-87);
     curveVertex(-222,-90);
     curveVertex(-230,-105);
     curveVertex(-215,-127);
     curveVertex(-200,-140);
     curveVertex(-210,-150);
  endShape(); 
 
 
//swanbody
  beginShape();
     curveVertex(-170,40);
     curveVertex(-140,20);
     curveVertex(-110,0);
     curveVertex(-90,-10);
     curveVertex(-70,-15);
     curveVertex(-40,-20);
     curveVertex(-10,-15);
     curveVertex(30,-10);
     curveVertex(50,10);
     curveVertex(70,40);
     curveVertex(90,50);
     curveVertex(70,65);
     curveVertex(55,80);
     curveVertex(30,110);
     curveVertex(-40,110);
     curveVertex(-85,110);
     curveVertex(-147,98);
     curveVertex(-180,95);
     curveVertex(-222,85);
     curveVertex(-225,60);
  endShape(CLOSE);
 
 
 
 
 
  //beak
  beginShape();
 
     fill(209,201,22);
     curveVertex(-225,-100);
     curveVertex(-222,-96);
     curveVertex(-220,-92);
    curveVertex(-215,-86);
     curveVertex(-220,-80);
     curveVertex(-227,-74);
     curveVertex(-232,-68);
     curveVertex(-240,-60);
     curveVertex(-237,-70);
     curveVertex(-235,-82);
     curveVertex(-230,-89);
 
  endShape(CLOSE);
 
 
     //small swan eye
     fill(255);
     ellipse(-210,-110,12);
     fill(0);
     ellipse(-210,-110,10);
     fill(255);
     ellipse(-213,-107,3);

  pop()
  pop()

}

function swan2(swan2x, swan2y, rotswan)
{
    //ripples
  fill(77,150,228,90);
   ellipse(370,550,300,70);

   fill(77,150,207,90);
   ellipse(370,550,350,90);

   fill(77,150,189,90);
   ellipse(370,550,400,100);

   fill(77,150,171,90);
   ellipse(370,550,450,120);

   fill(77,150,152,90);
   ellipse(370,550,550,140);

   fill(77,150,133,90);
   ellipse(370,550,700,160);
   
   push()
   translate(swan2x,swan2y)
   rotate(rotswan)
   //swanneck
   beginShape();
     fill(gray);
     curveVertex(-175,-147);
     curveVertex(-170,-147);
     curveVertex(-165,-147);
     curveVertex(-160,-145);
     curveVertex(-155,-143);
     curveVertex(-135,-130);
     curveVertex(-120,-110);
     curveVertex(-115,-70);
     curveVertex(-125,-40);
     curveVertex(-140,-10);
     curveVertex(-150,10);
     curveVertex(-155,20);
     curveVertex(-160,30)
     curveVertex(-165,40)
     curveVertex(-190,50)
     curveVertex(-200,55)
     curveVertex(-210,60)
     curveVertex(-227,80)
     curveVertex(-215,30)
     curveVertex(-190,-10)
     curveVertex(-155,-70);
     curveVertex(-155,-80)
     curveVertex(-155,-90);
     curveVertex(-170,-105);
     curveVertex(-200,-87);
     curveVertex(-222,-90);
     curveVertex(-230,-105);
     curveVertex(-215,-127);
     curveVertex(-200,-140);
     curveVertex(-210,-150);
  endShape(); 
 
 
//swanbody
  beginShape();
     fill(gray);
     curveVertex(-170,40);
     curveVertex(-140,20);
     curveVertex(-110,0);
     curveVertex(-90,-10);
     curveVertex(-70,-15);
     curveVertex(-40,-20);
     curveVertex(-10,-15);
     curveVertex(30,-10);
     curveVertex(50,10);
     curveVertex(70,40);
     curveVertex(90,50);
     curveVertex(70,65);
     curveVertex(55,80);
     curveVertex(30,110);
     curveVertex(-40,110);
     curveVertex(-85,110);
     curveVertex(-147,98);
     curveVertex(-180,95);
     curveVertex(-222,85);
     curveVertex(-225,60);
  endShape(CLOSE);
 
  //beak
  beginShape();
 
     fill(209,201,22);
     curveVertex(-225,-100);
     curveVertex(-222,-96);
     curveVertex(-220,-92);
    curveVertex(-215,-86);
     curveVertex(-220,-80);
     curveVertex(-227,-74);
     curveVertex(-232,-68);
     curveVertex(-240,-60);
     curveVertex(-237,-70);
     curveVertex(-235,-82);
     curveVertex(-230,-89);
  endShape(CLOSE);
     //small swan eye
     fill(255);
     ellipse(-210,-110,12);
     fill(0);
     ellipse(-210,-110,10);
     fill(255);
     ellipse(-213,-107,3);

  pop() 

}

function dead(deadx, deady)
{
   stroke(255, 0, 0)
   strokeWeight(17)
   line(-80, 485, -120, 515)
   line(-80, 515, -120, 485)
    
   stroke(0)
   strokeWeight(1) 
   fill(255, 170, 255)
   arc(-130, 555, 20, 60, 7*PI/4, -5*PI/4)

   fill(255, 0, 0)
   textSize(60)
   textFont("Helvetica")
   textStyle(BOLD)
   text("TRUMP FEVER,", 40, 350)

   fill(255, 0, 0)
   textSize(60)
   textFont("Helvetica")
   textStyle(BOLD)
   text("IT'S SERIOUS...", 200, 430)
}

function trumphead(facex, facey, rotface, scale)
{ 
  push()
  translate(facex, facey)
  rotate(rotface)
  scale(scaleface)
  //head 
  fill(255, 94, 20)
  ellipse(300, 265, 340, 400) 

  //right ear
  beginShape()
  fill(255, 94, 20)
  curveVertex(460, 300)
  curveVertex(460, 200)
  curveVertex(510, 220)
  curveVertex(490, 310)
  curveVertex(470, 320)
  endShape(CLOSE)

  //left ear
  beginShape()
  curveVertex(140, 300)
  curveVertex(140, 200)
  curveVertex(90, 220)
  curveVertex(110, 310)
  curveVertex(130, 320)
  endShape(CLOSE)

  //hair
  fill(255, 245, 27)
  beginShape()
  curveVertex(460, 220)
  curveVertex(460, 220)
  curveVertex(470, 140)
  curveVertex(400, 40)
  curveVertex(300, 20)
  curveVertex(160, 60)
  curveVertex(120, 200)
  curveVertex(140, 200)
  curveVertex(200, 160)
  curveVertex(310, 200)
  curveVertex(400, 160)
  curveVertex(450, 180)
  curveVertex(380, 220)
  curveVertex()
  endShape(CLOSE)

  //eyes
  fill(255)
  ellipse(240, 250, 100, 50)
  ellipse(360 ,250, 100, 50)
  //pupils
  fill(0)
  ellipse(240, 260, 25, 25)
  ellipse(360, 260, 25, 25)

  //lids
  fill(255, 114, 51)
  arc(240, 245, 100, 50, PI, 2*PI)
  //arc(360, 245, 100, 50, PI, 2*PI)

  //eyebrows
  beginShape()
  fill(255, 245, 27)
  curveVertex(280, 220)
  curveVertex(270, 200)
  curveVertex(240, 190)
  curveVertex(200, 220)
  curveVertex(240, 210)
  endShape(CLOSE)

  beginShape()
  curveVertex(320, 220)
  curveVertex(330, 200)
  curveVertex(360, 190)
  curveVertex(400, 220)
  curveVertex(360, 210)
  endShape(CLOSE)

  //nose
  fill(255, 114, 51)
  noStroke()
  ellipse(300, 300, 40, 100)
  ellipse(280, 330, 50, 40)
  ellipse(320, 330, 50, 40)
  stroke(0)
  arc(300, 330, 35, 40, 0, PI)

  //curved lines
  beginShape()
  noFill()
  stroke(255, 94, 20)
  curveVertex(230, 50)
  curveVertex(400, 120)
  curveVertex(310, 160)
  curveVertex(200, 120)
  curveVertex(250, 50)
  endShape(CLOSE)

  beginShape()
  noFill()
  stroke(255, 94, 20)
  curveVertex(230, 60)
  curveVertex(400, 130)
  curveVertex(310, 180)
  curveVertex(200, 130)
  curveVertex(250, 60)
  endShape(CLOSE)
  
  beginShape()
  noFill()
  stroke(255, 94, 20)
  curveVertex(230, 30)
  curveVertex(400, 100)
  curveVertex(310, 140)
  curveVertex(210, 100)
  curveVertex(250, 50)
  endShape(CLOSE)

  beginShape()
  noFill()
  stroke(255, 94, 20)
  curveVertex(250, 50)
  curveVertex(400, 80)
  curveVertex(310, 120)
  curveVertex(220, 70)
  endShape(CLOSE)

  beginShape()
  noFill()
  stroke(255, 94, 20)
  curveVertex(250, 40)
  curveVertex(400, 60)
  curveVertex(300, 100)
  curveVertex(230, 50)
  curveVertex(290, 30)
  endShape(CLOSE)

  beginShape()
  noFill()
  stroke(255, 94, 20)
  curveVertex(250, 40)
  curveVertex(400, 60)
  curveVertex(300, 100)
  curveVertex(230, 50)
  curveVertex(290, 30)
  endShape(CLOSE)

  beginShape()
  noFill()
  stroke(255, 94, 20)
  curveVertex(250, 30)
  curveVertex(375, 40)
  curveVertex(290, 80)
  curveVertex(250, 35)
  curveVertex(290, 30)
  endShape(CLOSE)

  //mouth
  fill(255, 117, 164)
  ellipse(300, 395, 93, 30)
  
  fill(255, 0 , 0)
  beginShape()
  curveVertex(250, 400)
  curveVertex(280, 360)
  curveVertex(300, 370)
  curveVertex(320, 360)
  curveVertex(350, 400)
  curveVertex(350, 400)
  curveVertex(320, 380)
  curveVertex(300, 390)
  curveVertex(280, 380)
  curveVertex(250, 400)
  endShape(CLOSE)

  beginShape()
  curveVertex(250, 400)
  curveVertex(300, 400)
  curveVertex(350, 400)
  curveVertex(350, 400)
  curveVertex(300, 420)
  curveVertex(250, 400)
  endShape(CLOSE)
  
  noFill()
  stroke(0)
  arc(220, 320, 100, 100, PI/2, 5*PI/4)
  arc(380, 320, 100, 100, 3.5*PI/2 , PI/2)
  pop()
}

function orange(orangex, orangey, rotorange, scaleorange)
{
  push()
  //stem
  translate(orangex, orangey)
  rotate(rotorange)
  scale(scaleorange)
  fill(255, 94, 20)
  ellipse(800, 280, 370, 370)
  fill(46, 148, 0)
  ellipse(800, 110, 40, 30)
  rect(760, 60, 40, 10)
  rect(790, 50, 20, 60)
  //leaf
  beginShape()
  curveVertex(760, 70)
  curveVertex(760, 60)
  curveVertex(690, 30)
  curveVertex(640, 30)
  curveVertex(600, 55)
  curveVertex(560, 60)
  curveVertex(560, 60)
  curveVertex(600, 75)
  curveVertex(640, 90)
  curveVertex(690, 90)
  endShape(CLOSE)
  line(560, 60, 760, 65)
  line(660, 62, 640, 35)
  line(660, 62, 640, 85)
  line(700, 62, 680, 35)
  line(700, 62, 680, 85)
  line(630, 62, 610, 50)
  line(630, 62, 610, 75)
  line(740, 64, 730, 50)
  line(740, 64, 730, 75)
  //pours
  fill(201, 87, 0)
  noStroke()
   ellipse(840, 105, 3, 3)
  ellipse(770, 105, 3, 3)

  ellipse(840, 120, 3, 3)
  ellipse(860, 120, 3, 3)
  ellipse(880, 120, 3, 3)
  ellipse(760, 120, 3, 3)
  ellipse(740, 120, 3, 3)
  ellipse(720, 120, 3, 3)


  ellipse(800, 135, 3, 3)
  ellipse(820, 135, 3, 3)
  ellipse(840, 135, 3, 3)
  ellipse(860, 135, 3, 3)
  ellipse(880, 135, 3, 3)
  ellipse(905, 135, 3, 3)
  ellipse(780, 135, 3, 3)
  ellipse(760, 135, 3, 3)
  ellipse(740, 135, 3, 3)
  ellipse(720, 135, 3, 3)
  ellipse(700, 135, 3, 3)


  ellipse(800, 150, 3, 3)
  ellipse(820, 150, 3, 3)
  ellipse(840, 150, 3, 3)
  ellipse(860, 150, 3, 3)
  ellipse(880, 150, 3, 3)
  ellipse(900, 150, 3, 3)
  ellipse(920, 150, 3, 3)
  ellipse(780, 150, 3, 3)
  ellipse(760, 150, 3, 3)
  ellipse(740, 150, 3, 3)
  ellipse(720, 150, 3, 3)
  ellipse(700, 150, 3, 3)
  ellipse(680, 150, 3, 3)


  ellipse(800, 165, 3, 3)
  ellipse(820, 165, 3, 3)
  ellipse(840, 165, 3, 3)
  ellipse(860, 165, 3, 3)
  ellipse(880, 165, 3, 3)
  ellipse(900, 165, 3, 3)
  ellipse(920, 165, 3, 3)
  ellipse(940, 165, 3, 3)
  ellipse(780, 165, 3, 3)
  ellipse(760, 165, 3, 3)
  ellipse(740, 165, 3, 3)
  ellipse(720, 165, 3, 3)
  ellipse(700, 165, 3, 3)
  ellipse(680, 165, 3, 3)
  ellipse(660, 165, 3, 3)

  ellipse(800, 180, 3, 3)
  ellipse(820, 180, 3, 3)
  ellipse(840, 180, 3, 3)
  ellipse(860, 180, 3, 3)
  ellipse(880, 180, 3, 3)
  ellipse(900, 180, 3, 3)
  ellipse(920, 180, 3, 3)
  ellipse(942, 180, 3, 3)
  ellipse(780, 180, 3, 3)
  ellipse(760, 180, 3, 3)
  ellipse(740, 180, 3, 3)
  ellipse(720, 180, 3, 3)
  ellipse(700, 180, 3, 3)
  ellipse(680, 180, 3, 3)
  ellipse(658, 180, 3, 3)

  ellipse(800, 195, 3, 3)
  ellipse(820, 195, 3, 3)
  ellipse(840, 195, 3, 3)
  ellipse(860, 195, 3, 3)
  ellipse(880, 195, 3, 3)
  ellipse(900, 195, 3, 3)
  ellipse(920, 195, 3, 3)
  ellipse(940, 195, 3, 3)
  ellipse(960, 195, 3, 3)
  ellipse(780, 195, 3, 3)
  ellipse(760, 195, 3, 3)
  ellipse(740, 195, 3, 3)
  ellipse(720, 195, 3, 3)
  ellipse(700, 195, 3, 3)
  ellipse(680, 195, 3, 3)
  ellipse(660, 195, 3, 3)
  ellipse(640, 195, 3, 3)


  ellipse(800, 210, 3, 3)
  ellipse(820, 210, 3, 3)
  ellipse(840, 210, 3, 3)
  ellipse(860, 210, 3, 3)
  ellipse(880, 210, 3, 3)
  ellipse(900, 210, 3, 3)
  ellipse(920, 210, 3, 3)
  ellipse(940, 210, 3, 3)
  ellipse(960, 210, 3, 3)
  ellipse(968, 210, 3, 3)
  ellipse(780, 210, 3, 3)
  ellipse(760, 210, 3, 3)
  ellipse(740, 210, 3, 3)
  ellipse(720, 210, 3, 3)
  ellipse(700, 210, 3, 3)
  ellipse(680, 210, 3, 3)
  ellipse(660, 210, 3, 3)
  ellipse(638, 210, 3, 3)

  ellipse(800, 225, 3, 3)
  ellipse(820, 225, 3, 3)
  ellipse(840, 225, 3, 3)
  ellipse(860, 225, 3, 3)
  ellipse(880, 225, 3, 3)
  ellipse(900, 225, 3, 3)
  ellipse(920, 225, 3, 3)
  ellipse(940, 225, 3, 3)
  ellipse(960, 225, 3, 3)
  ellipse(970, 225, 3, 3)
  ellipse(780, 225, 3, 3)
  ellipse(760, 225, 3, 3)
  ellipse(740, 225, 3, 3)
  ellipse(720, 225, 3, 3)
  ellipse(700, 225, 3, 3)
  ellipse(680, 225, 3, 3)
  ellipse(660, 225, 3, 3)
  ellipse(640, 225, 3, 3)
  ellipse(630, 225, 3, 3)

  ellipse(800, 240, 3, 3)
  ellipse(820, 240, 3, 3)
  ellipse(840, 240, 3, 3)
  ellipse(860, 240, 3, 3)
  ellipse(880, 240, 3, 3)
  ellipse(900, 240, 3, 3)
  ellipse(920, 240, 3, 3)
  ellipse(940, 240, 3, 3)
  ellipse(960, 240, 3, 3)
  ellipse(972, 240, 3, 3)
  ellipse(780, 240, 3, 3)
  ellipse(760, 240, 3, 3)
  ellipse(740, 240, 3, 3)
  ellipse(720, 240, 3, 3)
  ellipse(700, 240, 3, 3)
  ellipse(680, 240, 3, 3)
  ellipse(660, 240, 3, 3)
  ellipse(640, 240, 3, 3)
  ellipse(628, 240, 3, 3)


  ellipse(800, 255, 3, 3)
  ellipse(820, 255, 3, 3)
  ellipse(840, 255, 3, 3)
  ellipse(860, 255, 3, 3)
  ellipse(880, 255, 3, 3)
  ellipse(900, 255, 3, 3)
  ellipse(920, 255, 3, 3)
  ellipse(940, 255, 3, 3)
  ellipse(960, 255, 3, 3)
  ellipse(970, 255, 3, 3)
  ellipse(980, 255, 3, 3)
  ellipse(780, 255, 3, 3)
  ellipse(760, 255, 3, 3)
  ellipse(740, 255, 3, 3)
  ellipse(720, 255, 3, 3)
  ellipse(700, 255, 3, 3)
  ellipse(680, 255, 3, 3)
  ellipse(660, 255, 3, 3)
  ellipse(640, 255, 3, 3)
  ellipse(630, 255, 3, 3)
  ellipse(620, 255, 3, 3)

  ellipse(800, 270, 3, 3)
  ellipse(820, 270, 3, 3)
  ellipse(840, 270, 3, 3)
  ellipse(860, 270, 3, 3)
  ellipse(880, 270, 3, 3)
  ellipse(900, 270, 3, 3)
  ellipse(920, 270, 3, 3)
  ellipse(940, 270, 3, 3)
  ellipse(960, 270, 3, 3)
  ellipse(970, 270, 3, 3)
  ellipse(980, 270, 3, 3)
  ellipse(780, 270, 3, 3)
  ellipse(760, 270, 3, 3)
  ellipse(740, 270, 3, 3)
  ellipse(720, 270, 3, 3)
  ellipse(700, 270, 3, 3)
  ellipse(680, 270, 3, 3)
  ellipse(660, 270, 3, 3)
  ellipse(640, 270, 3, 3)
  ellipse(630, 270, 3, 3)
  ellipse(620, 270, 3, 3)

  ellipse(800, 285, 3, 3)
  ellipse(820, 285, 3, 3)
  ellipse(840, 285, 3, 3)
  ellipse(860, 285, 3, 3)
  ellipse(880, 285, 3, 3)
  ellipse(900, 285, 3, 3)
  ellipse(920, 285, 3, 3)
  ellipse(940, 285, 3, 3)
  ellipse(960, 285, 3, 3)
  ellipse(970, 285, 3, 3)
  ellipse(980, 285, 3, 3)
  ellipse(780, 285, 3, 3)
  ellipse(760, 285, 3, 3)
  ellipse(740, 285, 3, 3)
  ellipse(720, 285, 3, 3)
  ellipse(700, 285, 3, 3)
  ellipse(680, 285, 3, 3)
  ellipse(660, 285, 3, 3)
  ellipse(640, 285, 3, 3)
  ellipse(630, 285, 3, 3)
  ellipse(620, 285, 3, 3)

  ellipse(800, 300, 3, 3)
  ellipse(820, 300, 3, 3)
  ellipse(840, 300, 3, 3)
  ellipse(860, 300, 3, 3)
  ellipse(880, 300, 3, 3)
  ellipse(900, 300, 3, 3)
  ellipse(920, 300, 3, 3)
  ellipse(940, 300, 3, 3)
  ellipse(960, 300, 3, 3)
  ellipse(970, 300, 3, 3)
  ellipse(980, 300, 3, 3)
  ellipse(780, 300, 3, 3)
  ellipse(760, 300, 3, 3)
  ellipse(740, 300, 3, 3)
  ellipse(720, 300, 3, 3)
  ellipse(700, 300, 3, 3)
  ellipse(680, 300, 3, 3)
  ellipse(660, 300, 3, 3)
  ellipse(640, 300, 3, 3)
  ellipse(630, 300, 3, 3)
  ellipse(620, 300, 3, 3)

  ellipse(800, 315, 3, 3)
  ellipse(820, 315, 3, 3)
  ellipse(840, 315, 3, 3)
  ellipse(860, 315, 3, 3)
  ellipse(880, 315, 3, 3)
  ellipse(900, 315, 3, 3)
  ellipse(920, 315, 3, 3)
  ellipse(940, 315, 3, 3)
  ellipse(960, 315, 3, 3)
  ellipse(970, 315, 3, 3)
  ellipse(980, 315, 3, 3)
  ellipse(780, 315, 3, 3)
  ellipse(760, 315, 3, 3)
  ellipse(740, 315, 3, 3)
  ellipse(720, 315, 3, 3)
  ellipse(700, 315, 3, 3)
  ellipse(680, 315, 3, 3)
  ellipse(660, 315, 3, 3)
  ellipse(640, 315, 3, 3)
  ellipse(630, 315, 3, 3)
  ellipse(620, 315, 3, 3)

  ellipse(800, 330, 3, 3)
  ellipse(820, 330, 3, 3)
  ellipse(840, 330, 3, 3)
  ellipse(860, 330, 3, 3)
  ellipse(880, 330, 3, 3)
  ellipse(900, 330, 3, 3)
  ellipse(920, 330, 3, 3)
  ellipse(940, 330, 3, 3)
  ellipse(960, 330, 3, 3)
  ellipse(972, 330, 3, 3)
  ellipse(780, 330, 3, 3)
  ellipse(760, 330, 3, 3)
  ellipse(740, 330, 3, 3)
  ellipse(720, 330, 3, 3)
  ellipse(700, 330, 3, 3)
  ellipse(680, 330, 3, 3)
  ellipse(660, 330, 3, 3)
  ellipse(640, 330, 3, 3)
  ellipse(628, 330, 3, 3)

  ellipse(800, 345, 3, 3)
  ellipse(820, 345, 3, 3)
  ellipse(840, 345, 3, 3)
  ellipse(860, 345, 3, 3)
  ellipse(880, 345, 3, 3)
  ellipse(900, 345, 3, 3)
  ellipse(920, 345, 3, 3)
  ellipse(940, 345, 3, 3)
  ellipse(960, 345, 3, 3)
  ellipse(970, 345, 3, 3)
  ellipse(780, 345, 3, 3)
  ellipse(760, 345, 3, 3)
  ellipse(740, 345, 3, 3)
  ellipse(720, 345, 3, 3)
  ellipse(700, 345, 3, 3)
  ellipse(680, 345, 3, 3)
  ellipse(660, 345, 3, 3)
  ellipse(640, 345, 3, 3)
  ellipse(630, 345, 3, 3)

  ellipse(800, 360, 3, 3)
  ellipse(820, 360, 3, 3)
  ellipse(840, 360, 3, 3)
  ellipse(860, 360, 3, 3)
  ellipse(880, 360, 3, 3)
  ellipse(900, 360, 3, 3)
  ellipse(920, 360, 3, 3)
  ellipse(940, 360, 3, 3)
  ellipse(960, 360, 3, 3)
  ellipse(780, 360, 3, 3)
  ellipse(760, 360, 3, 3)
  ellipse(740, 360, 3, 3)
  ellipse(720, 360, 3, 3)
  ellipse(700, 360, 3, 3)
  ellipse(680, 360, 3, 3)
  ellipse(660, 360, 3, 3)
  ellipse(640, 360, 3, 3)

  ellipse(800, 375, 3, 3)
  ellipse(820, 375, 3, 3)
  ellipse(840, 375, 3, 3)
  ellipse(860, 375, 3, 3)
  ellipse(880, 375, 3, 3)
  ellipse(900, 375, 3, 3)
  ellipse(920, 375, 3, 3)
  ellipse(940, 375, 3, 3)
  ellipse(955, 375, 3, 3)
  ellipse(780, 375, 3, 3)
  ellipse(760, 375, 3, 3)
  ellipse(740, 375, 3, 3)
  ellipse(720, 375, 3, 3)
  ellipse(700, 375, 3, 3)
  ellipse(680, 375, 3, 3)
  ellipse(660, 375, 3, 3)
  ellipse(645, 375, 3, 3)

  ellipse(800, 390, 3, 3)
  ellipse(820, 390, 3, 3)
  ellipse(840, 390, 3, 3)
  ellipse(860, 390, 3, 3)
  ellipse(880, 390, 3, 3)
  ellipse(900, 390, 3, 3)
  ellipse(920, 390, 3, 3)
  ellipse(940, 390, 3, 3)
  ellipse(780, 390, 3, 3)
  ellipse(760, 390, 3, 3)
  ellipse(740, 390, 3, 3)
  ellipse(720, 390, 3, 3)
  ellipse(700, 390, 3, 3)
  ellipse(680, 390, 3, 3)
  ellipse(660, 390, 3, 3)

  ellipse(800, 405, 3, 3)
  ellipse(820, 405, 3, 3)
  ellipse(840, 405, 3, 3)
  ellipse(860, 405, 3, 3)
  ellipse(880, 405, 3, 3)
  ellipse(900, 405, 3, 3)
  ellipse(920, 405, 3, 3)
  ellipse(933, 405, 3, 3)
  ellipse(780, 405, 3, 3)
  ellipse(760, 405, 3, 3)
  ellipse(740, 405, 3, 3)
  ellipse(720, 405, 3, 3)
  ellipse(700, 405, 3, 3)
  ellipse(680, 405, 3, 3)
  ellipse(667, 405, 3, 3)

  ellipse(800, 420, 3, 3)
  ellipse(820, 420, 3, 3)
  ellipse(840, 420, 3, 3)
  ellipse(860, 420, 3, 3)
  ellipse(880, 420, 3, 3)
  ellipse(900, 420, 3, 3)
  ellipse(917, 420, 3, 3)
  ellipse(780, 420, 3, 3)
  ellipse(760, 420, 3, 3)
  ellipse(740, 420, 3, 3)
  ellipse(720, 420, 3, 3)
  ellipse(700, 420, 3, 3)
  ellipse(683, 420, 3, 3)

  ellipse(800, 435, 3, 3)
  ellipse(820, 435, 3, 3)
  ellipse(840, 435, 3, 3)
  ellipse(860, 435, 3, 3)
  ellipse(880, 435, 3, 3)
  ellipse(897, 435, 3, 3)
  ellipse(780, 435, 3, 3)
  ellipse(760, 435, 3, 3)
  ellipse(740, 435, 3, 3)
  ellipse(720, 435, 3, 3)
  ellipse(703, 435, 3, 3)

  ellipse(800, 450, 3, 3)
  ellipse(820, 450, 3, 3)
  ellipse(840, 450, 3, 3)
  ellipse(860, 450, 3, 3)
  ellipse(780, 450, 3, 3)
  ellipse(760, 450, 3, 3)
  ellipse(740, 450, 3, 3)

  pop()
}

function mouseClicked()
{
  if (counter == 0 && mouseX > 0 && mouseX < 800 && mouseY > 120 && mouseY < 700)
  {
    moveface = true
    moveswan = true
    counter +=1
  }

  if (counter == 1 && mouseX > 200 && mouseX < 250 && mouseY > 350 && mouseY < 450)
  {
    orangeon = true 
      counter += 1
  }
  
  if (counter == 2 && mouseX > 255 && mouseX < 350 && mouseY > 275 && mouseY < 350)
  { 
    swan2move = true
    counter += 1
  }  
  if (counter == 3 && mouseX > 350 && mouseX < 500 && mouseY > 250 && mouseY < 450)
  {
     facex = -100
     orangeon = false
     swan2move = false
     colorswan = true
     counter += 1
  }
  if (counter == 4 && mouseX > 255 && mouseX < 350 && mouseY > 275 && mouseY < 350)
  {
    deadon = true
    flood = true
  }
}

 
