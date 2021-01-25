class Ball {
  constructor(x, y, width, height) {
    var options = { 
      density: 1, 
      friction: 0.05};

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    
    push();
    translate(this.body.position.x, this.body.position.y);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
