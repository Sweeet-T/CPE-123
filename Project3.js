var maxtheta, theta, maxtheta0, theta0, maxtheta1, theta1, maxtheta2, theta2, maxtheta3, theta3, maxtheta4, theta4, maxtheta5, theta5, maxtheta6, theta6, maxtheta7, theta7, xl

function setup()
{
   createCanvas(900, 500);
   background(250, 130, 0);
   noStroke();

   maxtheta = 0
   maxtheta0 = 0
   maxtheta1 = 0
   maxtheta2 = 0
   maxtheta3 = 0
   maxtheta4 = 0
   maxtheta5 = 0
   maxtheta6 = 0
   maxtheta7 = 0

   xl = 0

   for (var y=0; y<height; y+=4)
   {
      for (var x=0; x<width; x+=4)
      {
         fill(248,random(137,188),0)
         rect(x+random(-2,2), y+random(-2,2), 10,10);
      }
   }

for (var k=0;k<6;k++)
{
fill(random(150, 255),random(90, 220), 20)
 xl+=random(30,100)
for (var i=0;i<1500;i+=5)
{
   var x=30*cos(5*i)+xl
   ellipse(x,i,7,20);
}

}

//tree
fill(120,48,0)
ellipse(650, 450, 40)
ellipse(645, 445, 40)
ellipse(640, 440, 40)
ellipse(635, 435, 40)
ellipse(630, 430, 40)
ellipse(625, 425, 40)
ellipse(620, 420, 40)
ellipse(615, 415, 40)
ellipse(610, 410, 40)
ellipse(605, 405, 40)
ellipse(600, 395, 48)
ellipse(602, 400, 40)
ellipse(602, 395, 40)
ellipse(602, 390, 40)
ellipse(602, 385, 40)
ellipse(605, 380, 40)
ellipse(610, 375, 40)
ellipse(615, 368, 40)
ellipse(620, 360, 40)
ellipse(627, 350, 40)
ellipse(630, 348, 40)
ellipse(632, 347, 40)
ellipse(635, 345, 40)
ellipse(639, 342, 40)
ellipse(643, 341, 40)
ellipse(646, 340, 40)
ellipse(650, 336, 40)
ellipse(655, 334, 40)
ellipse(660, 332, 40)
ellipse(665, 330, 40)
ellipse(670, 328, 40)
ellipse(675, 326, 40)
ellipse(680, 324, 40)
ellipse(685, 322, 40)
ellipse(690, 320, 40)
ellipse(695, 318, 40)
ellipse(700, 316, 40)
ellipse(705, 314, 40)
ellipse(710, 312, 40)
ellipse(715, 310, 40)
ellipse(720, 308, 40)
ellipse(725, 306, 40)
ellipse(728, 300, 40)
ellipse(734, 295, 40)
ellipse(738, 288, 40)
ellipse(740, 283, 40)
ellipse(742, 278, 40)
ellipse(744, 272, 40)
ellipse(742, 265, 40)
ellipse(740, 260, 40)
ellipse(738, 255, 40)
ellipse(736, 250, 40)
ellipse(734, 245, 39)
ellipse(732, 240, 38)
ellipse(730, 235, 37)
ellipse(728, 230, 36)
ellipse(726, 225, 35)
ellipse(720, 218, 30)
ellipse(716, 213, 25)
ellipse(712, 208, 20)



ground()

//flowers
for (var f=0; f<20; f++)
{
  flower(random(0, width), random(470, 490), random(0, 2*PI), random(.4, .9))
}
}



function draw()
{
   var x, y, radius, radius0, radius1, radius3, radius4, radius5, radius6, radius7, x0, y0, x1, y1
   radius = 0
   radius0 = 0
   radius1 = 0
   radius2 = 0
   radius3= 0
   radius4 = 0
   radius5 = 0
   radius6 = 0
   radius7 = 0


lady(color(150, 50, random(0,150)))
 
   for (theta0=0; theta0 <maxtheta0; theta0 += 2*PI/300)  
   {
      x0 = 570 + radius0 * cos(theta0)
      y0 = 360 + radius0 * sin(theta0) 
      fill(120,48,0)
      strokeWeight(3)
      ellipse(x0+10, y0-20, 7)
      radius0 += .05 
   }
   maxtheta0 += 2*PI/300


   for (theta=0; theta <maxtheta; theta += 2*PI/300)  
   {
      x = 640 + radius * cos(theta)
      y = 222 + radius * sin(theta) 
      fill(120,48,0)
      strokeWeight(1)
      ellipse(x+10, y-20, 20)
      radius += .1 
   }
   maxtheta += 2*PI/300

   for (theta1=0; theta1 < maxtheta1+1.2*PI; theta1 += 2*PI/300)  
   {
      x = 760 + radius1 * cos(theta1)
      y = 350 + radius1 * sin(theta1) 
      strokeWeight(3)
      ellipse(x+10, y-20, 7)
      radius1 += .05 
   }

   maxtheta1 += 2*PI/300

   for (theta2=0; theta2 < maxtheta2*PI/1.73; theta2 += 2*PI/300)  
   {
      x = 760 + radius2 * cos(theta2)
      y = 163 + radius2 * sin(theta2) 
      strokeWeight(3)
      ellipse(x+10, y-20, 15)
      radius2 += .07 
   }
   maxtheta2 += 2*PI/300

   for (theta3=0; theta3 < maxtheta3*PI/2; theta3 += 2*PI/300)  
   {
      x = 670 + radius3 * cos(theta3)
      y = 93 + radius3 * sin(theta3) 
      strokeWeight(3)
      ellipse(x+10, y-20, 8)
      radius3 += .04
   }
   maxtheta3 += 2*PI/300

   for (theta4=0; theta4 < maxtheta4*PI/15; theta4 += 2*PI/300)  
   {
      x = 780 + radius4 * cos(theta4)
      y = 300 + radius4 * sin(theta4) 
      strokeWeight(3)
      ellipse(x+10, y-20, 13)
      radius4 += 1.5
   }
   maxtheta4 += 2*PI/300

   for (theta5=0; theta5 < maxtheta5*PI/20; theta5 += 2*PI/300)  
   {
      x = 500 + radius5 * sin(theta5)
      y = 300 + radius5 * -cos(theta5) 
      strokeWeight(3)
      ellipse(x+10, y-20, 13)
      radius5 += 1.5
   }
   maxtheta5 += 2*PI/300

for (theta6=0; theta6 < maxtheta6*PI/2.65; theta6 += 2*PI/300)  
   {
      x = 567 + radius6 * sin(theta6)
      y = 170 + radius6 * -cos(theta6) 
      strokeWeight(3)
      ellipse(x+10, y-20, 6)
      radius6 += .05
   }
   maxtheta6 += 2*PI/300

   for (theta7=0; theta7 < maxtheta7*PI/4; theta7 += 2*PI/300)  
   {
      x = 520 + radius7 * cos(theta7)
      y = 310 + radius7 * sin(theta7) 
      strokeWeight(3)
      ellipse(x+10, y-20, 6)
      radius7 += .05
   }
   maxtheta7 += 2*PI/300


  if (maxtheta > 4*PI)
  {
     noLoop()
     fill(232,182,103,130)
     ellipse(160, 170, 60)
     fill(200)
     ellipse(180, 165,15,10)
     ellipse(155, 165, 15, 10)
     fill(0)
     ellipse(185, 165, 5)
     ellipse(160, 165, 5)
     noFill()
     strokeWeight(3)
     stroke(200, 0 ,0)
     arc(165, 180, 20, 12, 0, PI)
  }


//dots
for(var i=0;i<2;i++)
{
circle (random(500,1000),random(460),random(1,1.5),color(random(255),random(255),random(255)))
}
}

function ground()
{
   fill(90, 40, 0)
   beginShape()
   curveVertex(0, 500)
   curveVertex(0, 470)
   curveVertex(50, 460)
   curveVertex(200, 440)
   curveVertex(400, 460)
   curveVertex(600, 440)
   curveVertex(800, 460)
   curveVertex(900, 460)
   curveVertex(900, 500)
   endShape(CLOSE)
}

function circle(x,y,sc,col)
{
push()
strokeWeight(.7)
stroke(col)
fill(255)
translate(x,y)
scale(sc)
ellipse(0,0,3)
pop()
}

function lady(col2)
{
   //lady
fill(col2)
beginShape()
curveVertex(30, 500)
curveVertex(70, 350)
curveVertex(60, 275)
curveVertex(100, 200)
curveVertex(170, 200)
curveVertex(190, 275)
curveVertex(275, 500)
endShape(CLOSE)

//body art
fill(192,random(111),0)
triangle(80,440,35,490,135,490)
fill(192,random(111),0)
triangle(180,440,135,490,235,490)
fill(192,random(111),0)
triangle(270,440,235,490,280,490)
fill(192,random(111),0)
triangle(100,390,45,440,155,440)
fill(192,random(111),0)
triangle(210,390,155,440,270,440)
fill(192,random(111),0)
triangle(120,340,58,390,180,390)
fill(192,random(111),0)
triangle(220,340,185,390,249,390)
fill(192,random(111),0)
triangle(120,290,70,340,170,340)
fill(192,random(111),0)
triangle(196,290,170,340,220,340)
fill(192,random(111),0)
triangle(100,240,60,290,140,290)
fill(192,random(111),0)
triangle(170,240,140,290,195,290)
fill(192,random(111),0)
triangle(110,190,70,240,145,240)
fill(192,random(111),0)
triangle(150,190,145,240,180,240)

//head
fill(90, 40, 0)
beginShape()
curveVertex(0,220)
curveVertex(50, 185)
curveVertex(90, 170)
curveVertex(130, 130)
curveVertex(190, 120)
curveVertex(180, 190)

curveVertex(80 ,215)
curveVertex(0, 230)
endShape(CLOSE)

}

function flower(x, y, rot, sc)
{
   push()
   translate(x,y)
   rotate(rot)
   scale(sc)

   fill(21, 29, 56)
   ellipse(0, 0, 30, 40)

   fill(255, 255, 0)
   ellipse(-3, 0, 15, 20)
   pop()


}
