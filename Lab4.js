function randomcol() 
{
return color(random(255), random(255), random(255), random(150, 255))
}

function setup() 
{
  createCanvas(600, 600);
  background(0)
  noLoop()
}
 

function sweetea(x, y, fill_col, stroke_col, rot, sc, col) 
{
  push()
     translate(x,y)
     rotate(rot)
     scale(sc)
     fill(fill_col)
     stroke(stroke_col)
     strokeWeight(2)

    //lemon
    fill(col)
    ellipse(55, -100, 100)
    line(25, -140, 87, -63)
    ellipse(55, -100, 10)
    line(60, -103, 95, -130)

    //jar
    fill(fill_col)
    beginShape()
       curveVertex(-55, -100)
       curveVertex(-52, -95)
       curveVertex(-55, -90)
       curveVertex(-52, -85)
       curveVertex(-55, -80)
       curveVertex(-70, -55)
       curveVertex(-70, 0)
       curveVertex(-70, 50)
       curveVertex(-60, 90)
       curveVertex(0, 105)
       curveVertex(60, 90)
       curveVertex(70, 50)
       curveVertex(70, 0)
       curveVertex(70, -55)
       curveVertex(55, -80)
       curveVertex(52, -85)
       curveVertex(55, -90)
       curveVertex(52, -95)
       curveVertex(55, -100)
    endShape()

    //straw
    rect(-40, -100, 15, 190)

    //brim
    ellipse(0, -97, 105, 20) 
    //straw pt.2
    rect(-40, -140, 15, 50)
    line(-40, -140, -25, -130)
    line(-40, -120, -25, -110)
    line(-40, -100, -25, -90)
    line(-40, -80, -25, -70)
    line(-40, -60, -25, -50)
    line(-40, -40, -25, -30)
    line(-40, -20, -25, -10)
    line(-40, 0, -25, 10)
    line(-40, 20, -25, 30)
    line(-40, 40, -25, 50)
    line(-40, 60, -25, 70)
    line(-40, 80, -25, 90)
    //icecube
    rect(-10, -80, 30, 30)
    rect(30, -60, 33, 33)
    rect(-60, -65, 30, 30)
    rect(-20, -45, 30, 30)
  pop()  
}



function draw()
{

  //sweetea(300, 300, 0, 200, 0, 1)
//}  

  for (var i=0; i<30; i++)
  {
     sweetea(random(width), 
             random(height), 
             color(random(255), random(255), random(255), random(150, 255)), 
             color(random(255), random(255), random(255)), 
             random(2*PI), 
             random(.1, 1.2), randomcol())
  }  
}

function mouseClicked()
{
    location.reload() 
}

