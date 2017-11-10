function setup()
{
   var d, res1, res2, res3, res4, cx, cy, radi

   createCanvas(600, 600);
   background(100);
   noStroke();

   for (var y=5; y<height; y+=5)
   {
      for (var x=5; x<width; x+=10)
      {
         d = distance(x, y, x, height);

         res1 = imp_line(x, y, 100, 160, -100, height)
         res2 = imp_line(x, y, 100, 160, 220, height)
         res3 = imp_line(x, y, 210, 270, 110, height)
         res4 = imp_line(x, y, 210, 270, 270, height)
         res5 = imp_line(x, y, 290, 320, 190, height)
         res6 = imp_line(x, y, 290, 320, 360, height)
         res7 = imp_line(x, y, 360, 400, 300, height)
         res8 = imp_line(x, y, 360, 400, 420, height)
         res9 = imp_line(x, y, 460, 500, 380, height)
         res10= imp_line(x, y, 460, 500, 520, height)
         res11= imp_line(x, y, 550, 560, 500, height)
         res12= imp_line(x, y, 560, 560, 610, height)
         res13= imp_line(x, y, 600, 250, 400, 150)
         res14= imp_line(x, y, 400, 150, 0, 300)

         if (res1 < 0 && res2 > 0)
         {
            d = distance(x, y, x, height);
            fill(random(86, 120), random(130, 175), 10, 200)
            rect(x+random(-2,2), y+random(-2,2), 15, 10)
         }   

         else if (res3 < 0 && res4 > 0)   
         {
            fill(random(86, 120), random(130, 175), 10,200)
            rect(x+random(-3,3), y+random(-3,3), 15, 10)
         }

         else if (res5 < 0 && res6 > 0)
         {
            fill(random(86, 120), random(130, 175), 10,200)
            rect(x+random(-3,3), y+random(-3,3), 15, 10)
         }

         else if (res7 < 0 && res8 > 0)
         {
            fill(random(86, 120), random(130, 175), random(24, 100),200)
            rect(x+random(-3,3), y+random(-3,3), 15, 10)
         }

         else if (res9 < 0 && res10 > 0)
         {
            fill(random(86, 120), random(130, 175), random(24, 120),200)
            rect(x+random(-3,3), y+random(-3,3), 15, 10)
         }

         else if (res11 < 0 && res12 > 0)
         {
            fill(random(86, 120), random(130, 175), random(24, 120),200)
            rect(x+random(-3,3), y+random(-3,3), 15, 10)
         }

          else if (res13 < 0 && res14 < 0)
         {
            d = distance(x, y, x, 0);
            fill(random(120, 200)-d/2);
            ellipse(x+random(-2,0), y+random(-2,0), 20, 20)
         }

  
         else if (impl_circ(0, 0, 120, x, y) < 0)
         {
            fill(random(240, 255))
            ellipse(x+random(-2,2), y+random(-2,2), 30, 30)
         }

         else
         {   
            d = distance(x, y, x, 0);
            fill(255-d/1.5, 100-d/1.5)
            ellipse(x+random(-4,4), y+random(-2,2), 20, 10);
         }   
      }
   }
}

function imp_line(x, y, x0, y0, x1, y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function impl_circ(cx, cy, radi, in_x, in_y)
{
return ((in_x-cx)*(in_x-cx) + (in_y-cy)*(in_y-cy) -
 radi*radi);
}

function distance(x0, y0, x1, y1)
{
   return sqrt(pow(x0-x1, 2) + pow(y0-y1, 2));
}