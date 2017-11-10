var maxtheta, numlines, angle, pencilon, eyecol, maxtheta1, theta1, x3, y3, green, blue, greenup

function setup() 
{
   createCanvas(600, 600)
   noStroke()
   
   maxtheta = 0
   maxtheta1=0
   numlines = 100
   angle = 2*PI/3
   pencilon=true
   greenup = false
}   

function draw() 
{
  var x, y, theta, radius, x2, y2

  eyecol = color(random(220,255), 0, 0, random(50,200))
  
  background(255 ,150, 0)
  radius = 0
  
 for (theta=0; theta <maxtheta; theta += 2*PI/300)  
 {
   x = 300 + radius * cos(theta)
   y = 300 + radius * sin(theta) 
   fill(0)
   strokeWeight(1)
   ellipse(x+10, y-20, 4)
   radius += .05 
 }

 for (theta=0; theta <maxtheta; theta += 2*PI/300)  
 {
   x2 = 150 + radius * cos(theta)
   y2 = 250 + radius * sin(theta) 
   strokeWeight(1)
   ellipse(x2+10, y2-20, 4)
   radius += .05 
}

if (pencilon)
{
   pencil(x, y, x2, y2)
}
else
{
   face(0, 0, eyecol)
}

  if (maxtheta > 6*PI)
  {
     noLoop()
  }

  maxtheta += 2*PI/300
}

 function pencil(x, y, x2, y2)
 {
   stroke(0)
   fill(255, 248, 0)
   rect(x, y, 15, 200)
   fill(135, 80, 7)
   triangle(x, y, x+15, y, x+10, y-20)
   fill(0, 76, 2)
   rect(x, y+200, 15, 15)
   fill(240, 124, 255)
   rect(x, y+215, 15, 20)

   stroke(0)
   fill(255, 248, 0)
   rect(x2, y2, 15, 200)
   fill(135, 80, 7)
   triangle(x2, y2, x2+15, y2, x2+10, y2-20)
   fill(0, 76, 2)
   rect(x2, y2+200, 15, 15)
   fill(240, 124, 255)
   rect(x2, y2+215, 15, 20)
   noFill()
}


   function face(x, y, eyecol)
   {  
      green = 255
      blue = 0

      //head
      strokeWeight(1.2)
      fill(255, 100)
      beginShape() 
      curveVertex(0, 220)
      curveVertex(0, 180)
      curveVertex(70, 80)
      curveVertex(120, 40)
      curveVertex(180, 45)
      curveVertex(220, 80)
      curveVertex(300, 160)
      curveVertex(380 ,200)
      curveVertex(390, 330)
      curveVertex(340, 450)
      curveVertex(320, 550)
      curveVertex(80, 560)
      curveVertex(0, 280)
      endShape(CLOSE)

      //nose
      fill(255, 50)
      beginShape() 
      curveVertex(255 ,280)
      curveVertex(180, 390)
      curveVertex(300, 380)
      endShape(CLOSE)

      //mouth
      fill(255, 0, 0)
      ellipse(280, 480, 140, 70)
      fill(0)
      ellipse(280, 480, 60, 15)

      //lids
      noFill()
      arc(160, 310, 120, 50, 0, PI)
      arc(160, 335, 90, 30, 0, PI)
      arc(160, 355, 45, 15, 0, PI)

      //eyes
      strokeWeight(1.2)
      fill(eyecol)
      strokeWeight(5)
      translate(x, y)
      ellipse(310, 280, 90)
      ellipse(160, 230, 180)
      fill(0)
      ellipse(160, 230, 90)
      ellipse(310, 280, 30)

      fill(73, 175, 207)
      textSize(70)
      textFont("Helvetica")
      text("WUT", 300, 100) 

     fill(73, 175, 207)
     textSize(70)
     textFont("Helvetica")
     text("BRO?", 340, 180)

   radius2 = 100
for (theta1=0; theta1 <maxtheta1; theta1 += 2*PI/700)  
 {
   x3 = 465 + cos(5*theta1/2)*radius2*cos(theta1)
   y3 = 465 + cos(5*theta1/2)*radius2*sin(theta1) 
   
   push()
   noStroke()
   fill(0, green, blue)
   ellipse(x3, y3, 5)
   pop()

  if (greenup)
  {
    green+=255/700
    blue-=255/700
  }
  else
  {
    green-=255/700
    blue+=255/700
  } 

  if (green > 255 || green < 50)
  {
   greenup = !greenup
  }

  if (maxtheta1 > 20*PI)
  {
   noLoop()
  }
}
 maxtheta1 += 2*PI/300
}


function mouseClicked()
{
  pencilon = false
  greenup = true

}


