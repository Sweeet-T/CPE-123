var x, w, h
var windowY = 0
var windowX = 0

function setup() 
{
   createCanvas(600, 600);
   background(41, 229, 255)
   fill(39, 215, 240,100)
   noStroke()
   rect(0, 120, 600, 600)
   fill(35, 197, 219, 100)
   rect(0, 180, 600, 600)
   fill(32, 179, 199, 100)
   rect(0, 240, 600, 600)
   fill(30, 169, 189, 100)
   rect(0, 300, 600, 600)
   fill(25, 137, 153, 100)
   rect(0, 360, 600, 600)
   
  //sidewalk cracks 
  fill(150)
  rect(0, 550, 600, 50)
  strokeWeight(1.3)
  line(75, 551, 75, 600)
  line(150, 551, 150, 600)
  line(225, 551, 225, 600)
  line(300, 551, 300, 600)
  line(375, 551, 375, 600)
  line(450, 551, 450, 600)
  line(525, 551, 525, 600)
   noLoop()
}

function draw()
{
  x=0

  while(x<600)
  {
    h=random(150, 400)
    w=random(40, 100)
     
    building(color(random(0, 173), random(0, 86), random(0, 255)), x, h, w)

    x+=w
  }

    fill(150)
  rect(0, 550, 600, 50)
  strokeWeight(1.3)
  line(75, 551, 75, 600)
  line(150, 551, 150, 600)
  line(225, 551, 225, 600)
  line(300, 551, 300, 600)
  line(375, 551, 375, 600)
  line(450, 551, 450, 600)
  line(525, 551, 525, 600)

  fill(255)
  noStroke()
  ellipse(100, 110, 50)
  ellipse(125, 85, 40)
  ellipse(165, 80, 60)
  ellipse(190, 106, 60)
  rect(100, 90, 100, 45)

  fill(252, 244, 57)
  ellipse(600, 0, 350)

  for (var i=0; i<50; i++)
  {
     noFill()
     birds(random(width), 
           random(0, 100), 
           random(-PI/4, PI/4), 
           random(.5, .8))
  }  

}



function building(col, x, h, w)
{
   fill(col)
   rect(x, height-h, w, h)
   stroke(0)
   fill(255)
   rect(x, height-h, w, h/13)
   fill(225)
   rect(x, height-h/1.15, w, h/16)
   fill(195)
   rect(x, height-h/1.3, w, h/16)
   fill(165)
   rect(x, height-h/1.5, w, h/16)
   fill(135)
   rect(x, height-h/1.75, w, h/16)
   fill(105)
   rect(x, height-h/2.1, w, h/16)
   fill(85)
   rect(x, height-h/2.6, w, h/16)
   fill(50)
   rect(x, height-h/3.4, w, h/16)
   fill(20)
   rect(x, height-h/4.8, w, h/16)
}

function birds(x1, y1, rot, sc) 
{
  push()
     translate(x1,y1)
     rotate(rot)
     scale(sc)
     stroke(0)
     strokeWeight(2)

     arc(x1, y1, 15, 15, PI, 0)
     arc(x1+15, y1, 15, 15, PI, 0)
  pop()
}

function mouseClicked()
{
    location.reload() 
}
