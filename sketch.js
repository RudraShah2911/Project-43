var hr, mn, sc
var h, m, s 


function setup() {
  createCanvas(500,500);

  angleMode(DEGREES)
 
}

function draw() {
  background("black");  

 translate(250, 250)
 rotate(-90)

  hr = hour()
  mn = minute()
  sc = second()

  /*fill("white")
  textSize(20)
  text(hr + ":" + mn + ":" + sc, 200, 250)*/
 
  s = map(sc, 0, 60, 0, 360)
  m = map(mn, 0, 60, 0, 360)
  h = map(hr%12, 0, 12, 0, 360)

  noFill()
  strokeWeight(5)
  stroke("blue")
  arc(0,0,200,200,0,s)

  stroke("red")
  arc(0,0,185,185,0,m)

  stroke(0,254,0)
  arc(0,0,170,170,0,h)

  push()
  strokeWeight(5)
  stroke("blue")
  rotate(s)
  line(0, 0, 60, 0)
  pop()

  push()
  strokeWeight(5)
  stroke("red")
  rotate(m)
  line(0, 0, 50, 0)
  pop()

  push()
  strokeWeight(5)
  stroke(0,254,0)
  rotate(h)
  line(0, 0, 40, 0)
  pop()
  
}