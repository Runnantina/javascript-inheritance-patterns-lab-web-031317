function Point(x,y){
  this.x = x;
  this.y = y
}

Point.prototype.toString = function(){
  return `(${this.x}, ${this.y})`
}

// Shape constructor

function Shape(){
  this.position = null
}

Shape.prototype.addToPlane = function(x,y){
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
  this.addToPlane(x,y)
}

// Circle constructor

function Circle(radius){
  Shape.call(this);
  this.radius = radius;
}

// Circle inheriting from Shape
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.diameter = function(){
  return this.radius*2
}

Circle.prototype.area = function(){
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function(){
  return 2 * Math.PI * this.radius
}



function Side(length){
  this.length = length
}

function Polygon(sides){
  Shape.call(this);
  this.sides = sides
}

// This below is how the Polygon prototype will inherit all functionalities from Shape
Polygon.prototype = Object.create(Shape.prototype)

Shape.prototype.perimeter = function(){
  var p = 0;
  for (var i = 0; i < this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return p
}

Shape.prototype.numberOfSides = function(){
  return this.sides.length 
}
