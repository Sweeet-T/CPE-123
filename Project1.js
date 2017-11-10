var xBB 
var yBB 
var scaleBB 
var rotBB
var BBdown 
var x, y, sx, ax, y, sy, ay, scaleH, scaleS, rotarm, axeDown;
var count 
var flood
var floodheight
function setup() 
{
   createCanvas(900, 600);
   background(250, 243, 200)
   xBB = 215
   yBB = 230
   scaleBB = 1.1
   rotBB = 0
   BBdown = true
   flood = true 

   x = 0;
   sx = 0;
   ax = 0;
   y = 0;
   sy = 0;
   ay= 0;
   scaleH =1;
   scaleS = 1;
   rotarm = 0;
   axeDown = true;
   count = 0
   floodcount = 0
   floodheight = 600
}   

function draw() 
{
   background(250, 243, 200)
   if (flood)
   {
   floodheight -= 2
   fill(156, 29, 8)
   rect(-1, floodheight, width, 900)
   }   
   drawarmBB(xBB, yBB, scaleBB, rotBB)
   drawAxe(700, 302, rotarm);  
   if (axeDown){
      rotarm += PI/62;
   }
      else{
      rotarm -= PI/30;
   }

   if (rotarm >= PI/1.5 && axeDown || rotarm <= PI/60 && !axeDown){
      axeDown = !axeDown;
      count += 1
   }
   if (count == 10)
   {
      noLoop()
   }   
   

   rotBB += PI/62
  
   if (BBdown)
   {
     rotBB += PI/60
   }
   else 
   {
      rotBB -= PI/30
   }
   
   if (rotBB >= -PI/100 && BBdown || rotBB <= -PI/1.5 && !BBdown)
   {
      BBdown = !BBdown
   }

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

   //VS text
   fill(0)
   textSize(60)
   textFont("Helvetica")
   text("VS", 330, 150)

   fill(73, 175, 207)
   textSize(30)
   textFont("Helvetica")
   textStyle(BOLD)
   text("UN", 400, 50)
   
   fill(73, 175, 207)
   textSize(70)
   textStyle(BOLD)
   textFont("Helvetica")
   text("BOURREAU", 450, 100)


   //papa head and nose and left hand
   fill(110, 50, 37)
   noStroke()
   ellipse(220, 168, 42 ,52)
   arc(235, 170, 20, 10, 3*PI/2, PI/2)
   arc(225, 180, 30, 28, 7*PI/4, 3*PI/4)
      //neck
   quad(205, 180, 220, 190, 210, 212, 190, 207)


   //collar
   beginShape()
   fill(110, 50, 37)
   vertex(183, 205)
   vertex(190, 205)
   vertex(210, 210)
   vertex(214, 230)
   vertex(205, 245)
   endShape(CLOSE)
   //dress
   beginShape()
   fill(229, 50, 22)
   vertex(183, 205)
   vertex(176, 212)
   vertex(135, 420)
   vertex(212, 423)
   vertex(200, 332)
   vertex(227, 235)
   vertex(220, 210)
   vertex(210, 210)
   vertex(205, 235)
   endShape(CLOSE)
   ellipse(217, 235, 20, 50)

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


//EXECUtIONer

  //upper body
   fill(204, 102, 0);
   noStroke();
   arc(740, 310, 130, 170, 17*PI/16, PI/16);
   //stomach
   fill(68, 39, 5);
   quad(690, 300, 785, 318, 780, 390, 680, 385);
   //belt
   fill(71, 117, 209);
   quad(680, 385, 780, 390, 780, 405, 680, 400);
   //lower body
   fill(68, 39, 5);
   quad(780, 405, 680, 400, 680, 460, 785, 460);
   //axe
   //right arm
   fill(229, 166, 150);
   quad(785, 318, 805, 322, 800, 408, 780, 408);
   arc(790, 415, 30, 30, 0, 0);
   //wrists
   fill(68, 39, 5);
   quad(800, 405, 780, 405, 780, 388, 801, 388);
   //belt buckle
   stroke(255);
   strokeWeight(3);
   quad(735, 388, 755, 388, 755, 402, 735, 402);
   fill(255);
   noStroke();
   rect(736, 394, 5, 2);

   //left leg
   fill(68, 39, 5);
   quad(680, 460, 685, 525, 710, 525, 725, 460);
   arc(686, 516, 65, 18, 6*PI/12, 20*PI/12);
   fill(250, 243, 200);
   //triangle(705, 525, 690, 525, 705, 521);
   //right leg
   fill(68, 39, 5);
   quad(748, 460, 785, 460, 775, 525, 745, 525);
   arc(755, 516, 70, 18, 6*PI/12, 20*PI/12);
   fill(250, 243, 200);
   //arc(736, 460, 22, 22, PI, 0);
   //triangle(769, 525, 755, 525, 769, 521);
   //lace
   stroke(255);
   strokeWeight(1);
   line(740, 315, 755, 318);
   line(740, 315, 755, 325);
   line(755, 325, 740, 322);
   line(740, 322, 753, 332);
   line(753, 332, 739, 330);
   
   //Head
   drawHead(718, 230, scaleH);
}

function drawarmBB(xBB, yBB, scaleBB, rot)
{
   push()
      translate(xBB, yBB)
      scale(scaleBB)
      rotate(rot)

      //baby
      push()
      rotate(PI/1.75)
      translate(-100, -440)

      fill(110, 50, 37)
      noStroke()
      ellipse(190, 235, 30, 40)
      arc(200, 235, 20, 10, 3*PI/2, PI/2)
      arc(200, 242, 15, 20, 7*PI/4, 3*PI/4)
      quad(180, 245, 193, 250, 190, 260, 175, 260)
      rect(175, 260, 60, 10)
      arc(235, 265, 10, 10, 3*PI/2, PI/2)
      quad(175, 260, 200, 260, 190, 300, 160, 300)
      quad(190, 300, 160, 300, 165, 323, 193, 320)
      fill(229, 144, 0)
      quad(165, 323, 193, 320, 198, 335, 172, 345)
      fill(110, 50, 37)
      quad(198, 335, 173, 345, 225, 400, 235, 385)
      quad(225, 400, 240, 375, 245, 385, 230, 405)
      ellipse(242, 381, 10, 10)
      fill(250, 243, 200)
      noFill()
      fill(250, 243, 200)
      pop()

      // left arm
      noStroke()
      beginShape()
      fill(110, 50, 37)
      curveVertex(0, 0)
      curveVertex(-10, -10)
      curveVertex(-20, 10)
      curveVertex(-15, 86)
      curveVertex(15, 135)
      curveVertex(25, 131)
      curveVertex(5, 80)
      endShape(CLOSE)
      noStroke()
      ellipse(20, 130, 20 , 20)

      
   pop()
}


   function drawHead(x, y, scaleH)
   {
      push();
      translate(x, y);
      scale(scaleH);
      

      noStroke();
      fill(204, 102, 0);
      beginShape()
      vertex(0, 0);
      vertex(2, -30);
      vertex(3, -45);
      vertex(5, -60);
      vertex(6, -65);
      vertex(7, -75);
      vertex(10, -90);
      vertex(14, -100);
      vertex(20, -110);
      vertex(30, -100);
      vertex(36, -90);
      vertex(42, -80);
      vertex(45, -70);
      vertex(46, -68);
      vertex(50, -55);
      vertex(51, -45);
      vertex(52, -41);
      vertex(54, 5);
      vertex(0, 0);
      endShape();
      fill(0);
      ellipse(10, -37, 8, 22, 0, 0);
      ellipse(22, -37, 8, 22, 0, 0);
   
      pop();
   }
function drawAxe(ax, ay, rot)
   {
      push();
      translate(ax, ay);
      rotate(rot);
      noStroke();
      //left arm
      fill(229, 166, 150);
      quad(-24, -5, 0, 0, -18, 63, -40, 53);
      quad(-40, 53, -18, 63, -18, 103, -37, 103);
      arc(-26, 113, 30, 30, 0, 0);
      fill(68, 39, 5);
      quad(-38, 82, -18,82, -18, 100, -37, 100);
      //axe handle
      quad(140, 108, 140, 113, -290, 113, -290, 108);
      //axe head
      fill(71, 117, 209);
      rect(-270, 96, 15, 30);
      triangle(-264, 120, -220, 155, -305, 155);
      ellipse(-263, 155, 83, 15);

      pop();
   }





