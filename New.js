var counter = 0
var isCalled = false

function setup() 
{
   createCanvas(800, 600);
   background(0)

   fill(255)
   textSize(30)
   textFont("Helvetica")
   textStyle(BOLD)
   text("If I didn't ride blade on curb, would you still love me?", 20, 50)

   fill(73, 175, 207)
   textSize(100)
   textFont("Helvetica")
   textStyle(BOLD)
   text("YES", 90, 300)

   fill(73, 175, 207)
   textSize(100)
   textFont("Helvetica")
   textStyle(BOLD)
   text("NO", 525, 300)

}


function draw() 
{
   if(isCalled){
      dfColor = color(random(255), random(255), random(255))   
      drawFUCKYOU(random(width-50), random(height-50), random(- PI/4, PI/4), random(.2, .5), dfColor)

      counter += 1
      if (counter > 500)
      {       
            noLoop()
      }
      isCalled = false
   }
}

function drawFUCKYOU(x, y, rot, sc, col)
{
   push()
      translate(x, y)
      rotate(rot)
      scale(sc)

      fill(col)
      textSize(200)
      textFont("Helvetica")
      textStyle(BOLD)
      text("FUCK YOU", 0, 0)
   pop()

}

function mouseClicked()
{
   if (mouseX > 400 && mouseX < 800 && mouseY > 0 && mouseY < 800)
   {
      isCalled = true
   }
}
