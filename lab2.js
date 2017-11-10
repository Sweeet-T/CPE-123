function setup() 
{
   createCanvas(400, 600);
   background(250, 243, 200)
}

function draw() 
{
   //UN text
   fill(73, 175, 207)
   textSize(30)
   textFont("Helvetica")
   textStyle(BOLD)
   text("UN", 40, 50)	

   //PAPA text
   fill(73, 175, 207)
   textSize(70)
   textFont("Helvetica")
   text("PAPA", 100, 100)

   //TOUJOURS
   fill(73, 175, 207)
   textSize(20)
   textFont("Helvetica")
   text("TOUJOURS", 5, 20)


   //papa head and nose and left hand
   fill(110, 50, 37)
   noStroke()
   ellipse(220, 168, 42 ,52)
   arc(235, 170, 20, 10, 3*PI/2, PI/2)
   arc(226, 180, 30, 25, 7*PI/4, 3*PI/4)
   ellipse(235, 360, 20 , 20)
   //neck
   quad(205, 180, 220, 190, 210, 210, 190, 205)
   fill(250, 243, 200)
   ellipse(232, 198, 30, 20)
   noFill()
   //dress
   beginShape()
   fill(229, 50, 22)
   vertex(183, 205)
   vertex(176, 212)
   vertex(135, 420)
   vertex(212, 423)
   vertex(200, 332)
   vertex(214, 230)
   vertex(205, 245)
   endShape(CLOSE)
   //collar
   beginShape()
   fill(110, 50, 37)
   vertex(183, 205)
   vertex(190, 205)
   vertex(210, 210)
   vertex(214, 230)
   vertex(205, 245)
   endShape(CLOSE)

   // left arm
   beginShape()
   fill(110, 50, 37)
   curveVertex(214, 230)
   curveVertex(200, 316)
   curveVertex(230, 365)
   curveVertex(240, 361)
   curveVertex(220, 310)
   endShape(CLOSE)

   //staff
   push()
      translate(60, 457)
      rotate(7.35*PI/4)
      fill(229, 50, 22)
      rect(0, 0, 200, 5)
   pop()
   push()
      translate(243, 354)
      rotate(7.35*PI/4)
      fill(229, 50, 22)
      rect(0, 0, 20, 5)
   pop()   


   // right arm
   beginShape()
   fill(110, 50, 37)
   curveVertex(176, 212)
   curveVertex(170, 214)
   curveVertex(154, 230)
   curveVertex(132, 300)
   curveVertex(148, 372)
   curveVertex(149, 406)
   curveVertex(170, 400)
   curveVertex(158, 322)
   curveVertex(167, 258)
   curveVertex(162, 286)
   curveVertex(180, 236)
   curveVertex(176, 212)
   endShape(CLOSE)

   //left leg
   quad(135, 420, 160, 420, 148, 447, 132, 435)
   arc(137, 457, 43, 43, 3*PI/4, 7*PI/4)
   ellipse(144, 442, 15, 15)
   quad(117, 453, 123, 470, 105, 490, 95, 485)
   ellipse(100, 490, 15, 15)
   quad(100, 485, 130, 495, 130, 500, 103, 496)
   ellipse(107, 491, 24, 13)

   //right leg
   quad(185, 422, 210, 422, 210, 437, 192, 440)
   arc(206, 455, 35, 43, 0.9*PI/2, 2.9*PI/2)
   quad(192, 440, 210, 437, 212, 490, 200, 495)
   ellipse(206, 495, 15, 15)
   quad(212, 488, 235, 482, 238, 489, 212, 500)

   
   //baby
   var scaleBB = 1
   var xBB = 200
   var yBB = 50
    
   push()
      translate(xBB, yBB)
      scale(scaleBB)  
      //head
      fill(110, 50, 37)
      noStroke()
      ellipse(-10, 35, 30, 40)
      arc(0, 35, 20, 10, 3*PI/2, PI/2)
      arc(-2, 42, 15, 20, 7*PI/4, 3*PI/4)
      quad(-20, 45, -7, 50, -10, 60, -25, 60)
      rect(-25, 60, 60, 10)
      arc(35, 65, 10, 10, 3*PI/2, PI/2)
      quad(-25, 60, 0, 60, -10, 100, -40, 100)
      quad(-10, 100, -40, 100, -35, 123, -7, 120)
      fill(229, 144, 0)
      quad(-35, 123, -7, 120, -2, 135, -28, 145)
      fill(110, 50, 37)
      quad(-2, 135, -28, 145, 25, 200, 35, 185)
      quad(25, 200, 40, 175, 45, 185, 30, 205)
      ellipse(42, 181, 10, 10)
      fill(250, 243, 200)
      rect(-44, 96, 5, 10)
      noFill()
      fill(250, 243, 200)
      ellipse(-5, 55, 7, 7)
   pop()
}
