var numGuys;
var dir = [];
var loc = [];
var sc = [];
var col = [];
var theta = [];
var thetaAdd = [];
var centerLoc = [];

var treeX = [];
var treeRot = [];
var treeColor = [];

function setup() 
{
   createCanvas(700, 500);
   numGuys = 8;

   for (var i=0; i<numGuys; i++)
   {
      centerLoc.push(createVector(random(100, 400), random(100, 400)));
      loc.push(createVector());
      dir.push(createVector());
      theta.push(random(2*PI));
      thetaAdd.push(random(-PI/40, PI/40));
      sc.push(random(.5, 1.3));
      col.push(color(random(0,255), random(0, 255), random(0,255), 255));

   }


   // set up sky variables
   var x = -50;
   while (x < width + 50)
   {
      treeX.push(x);
      treeRot.push(random(-PI/30, PI/30));
      treeColor.push(color(0, random(80, 130), random(120,170), 200));
      x += random(30, 70);
   }
   noStroke();
}

function draw() 
{

   var next = createVector();
   // sky
background(0)   

 for (var y1=5; y1<height; y1+=5)
   {
      for (var x1=5; x1<width; x1+=10)
      {
         fill(255, 20)
         ellipse(x1+random(-4,4), y1+random(-2,2), 20, 20);
      }
   }  

   //sky
   for (var i=0; i < treeX.length; i++)
   {
      drawTree(treeX[i], treeRot[i], treeColor[i]);
   }
   //landscape
   fill(100)
   triangle(0,500, 350, 300, 700, 500)
   fill(120)
   triangle(260, 500, 300, 500, 280, 170)
   fill(140)
   ellipse(630, 470, 40, 80)
   fill(160)
   triangle(200, 500, 220, 500, 210, 400)
   fill(180)
   triangle(560, 500, 580, 500, 570, 400)
   fill(200)
   ellipse(520, 430, 60, 160)
   fill(220)
   triangle(370, 500, 400, 500, 385, 200)
   fill(240)
   ellipse(460, 460, 100, 200)
   fill(255)
   ellipse(240, 350, 60, 140)
   fill(10)
   ellipse(175, 450, 60, 160)
   fill(100)
   rect(445, 400, 10, 100)
   fill(30)
   ellipse(450, 350, 60, 160)
   fill(50)
   triangle(0,500, 20, 500, 10, 450)
   fill(70)
   triangle(680,500, 700, 500, 690, 450)
   fill(90)
   triangle(100, 500, 140, 500, 120, 400)
   fill(110)
   ellipse(300, 460, 150, 200)
   fill(130)
   rect(345, 420, 10, 200)
   fill(150)
   ellipse(350, 350, 120, 170)
   fill(170)
   triangle(500,500, 550, 500, 525, 400)
   triangle(505, 420, 545, 420, 525, 320)
   triangle(515, 340, 535, 340, 525, 240)
   fill(190)
   rect(420, 400, 10, 100)
   fill(210)
   triangle(400, 400, 450, 400, 425, 300)
   triangle(405, 320, 445, 320, 425, 220)
   fill(230)
   rect(180, 450, 10, 100)
   fill(250)
   triangle(160, 350, 210, 350, 185, 300)
   triangle(160, 400, 210, 400, 185, 350)
   triangle(160, 450, 210, 450, 185, 400)
   fill(140)
   ellipse(40, 475, 30, 50)
   fill(160)
   ellipse(80, 470, 40, 60)
   fill(200)
   rect(580,450,10, 50) 
   fill(80)
   triangle(560, 350, 610, 350, 585, 300)
   triangle(560, 400, 610, 400, 585, 350)
   triangle(560, 450, 610, 450, 585, 400)
   fill(20)
   ellipse(660,480,30, 50) 



   for (var i=0; i<numGuys; i++)
   {
      drawGuy(loc[i].x, loc[i].y, dir[i].x, dir[i].y, sc[i], col[i]);
      
      theta[i] += thetaAdd[i];
      next.x = centerLoc[i].x + 350 * cos(theta[i]);
      next.y = centerLoc[i].y + 100 * sin(2*theta[i]);

      dir[i].x = next.x - loc[i].x;
      dir[i].y = next.y - loc[i].y;

      loc[i].x += dir[i].x
      loc[i].y += dir[i].y;
   }
}


function drawGuy(x, y, dx, dy, sc, c)
{
   push();
      translate(x, y);
      rotate(atan2(dy, dx)+PI/2);
      scale(sc);

   noFill()
   //antennae
   stroke(152, 72, 26)
   arc(-7, -10, 10, 30, 5*PI/4, PI/4)
   arc(7, -10, 10, 30, 3*PI/4, 7*PI/4)
   noStroke()
//wings   
   fill(178, 69, 58)
   triangle(0,0,-60, -9, -60, 9)
   triangle(0,0,60, -9, 60,9)
   ellipse(-60, 0, 18)
   ellipse(60, 0, 18)
   fill(c)
   ellipse(-60, 0, 15)
   ellipse(60, 0, 15)
   fill(178, 69, 58)
   ellipse(-60, 0, 7)
   ellipse(60, 0, 7)

//lower
   fill(251, 181, 82)
   triangle(5, 6, 25, 35, 3, 40)
   ellipse(17, 40, 28)
   fill(c)
   ellipse(17, 40, 23)
   fill(251, 181, 82)
   ellipse(17, 40, 11)
   triangle(-5, 6, -25, 35, -3, 40)
   ellipse(-17, 40, 28)
   fill(c)
   ellipse(-17, 40, 23)
   fill(251, 181, 82)
   ellipse(-17, 40, 11)
   //upper
   fill(212, 114, 48)
   triangle(6, 5, 30, 10, 16, 30) 
   ellipse(26, 22, 25)
   triangle(-6, 5, -30, 10, -16, 30)
   ellipse(-26, 22, 25)
   fill(c)
   ellipse(26, 22, 19)
   ellipse(-26, 22, 19)
   fill(212, 114, 48)
   ellipse(26, 22, 10)
   ellipse(-26, 22, 10)

//bod and head
   fill(152, 72, 26)
   triangle(-8, 0, 8, 0, 0, 20)
   ellipse(0,0, 16)
   fill(142, 62, 16)
   ellipse(0, 0, 12)

   pop();
}


function drawTree(x, rot, c)
{
   fill(c);
   push();
      rotate(rot);
      rect(x, 0, 60, height+100);
      fill(200,200)
      ellipse(x, random(20, 30), random(100, 180), random(40, 80))
   pop();
}
