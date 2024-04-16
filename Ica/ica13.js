
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x,y,velx,vely,color,size){
        this.x =x;
        this.y =y;
        this.velx =velx;
        this.vely =vely;
        this.color = color;
        this.size = size;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();

    }

    update(){
        if ((this.x+this.size)>=
    width){
        this.velx = -(this.velx);
    }

    if ((this.x-this.size)<=
    0){
        this.velx = -(this.velx);
    }

    if ((this.y+this.size)>=
    height){
        this.vely=-(this.vely);
    }

    if ((this.y-this.size)<=
    0){
        this.vely=-(this.vely);
    }

    this.x += this.velx;
    this.y += this.vely


    }

    collisionDetect() {
        for (const ball of balls) {
            if (this !== ball) {
                const dx = ball.x - this.x;
                const dy = ball.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
    
                if (distance < this.size + ball.size) {
                    const angle = Math.atan2(dy, dx);
    
                    const thisVel = {
                        x: this.velx * Math.cos(angle) + this.vely * Math.sin(angle),
                        y: this.velx * Math.sin(angle) - this.vely * Math.cos(angle)
                    };
                    const ballVel = {
                        x: ball.velx * Math.cos(angle) + ball.vely * Math.sin(angle),
                        y: ball.velx * Math.sin(angle) - ball.vely * Math.cos(angle)
                    };
    
                    [this.velx, ball.velx] = [ballVel.x, thisVel.x];
                    [this.vely, ball.vely] = [ballVel.y, thisVel.y];
    
                    this.x += this.velx;
                    this.y += this.vely;
                    ball.x += ball.velx;
                    ball.y += ball.vely;
                }
            }
        }
    }
    
}

const balls = [];

while (balls.length < 10){
    const size = random(1,20);
    const ball = new Ball(
        random(0+size,height - size),
        random(0+size,height -size),
        random(-10,5),
        random(-10,5),
        randomRGB(),
        size,

    );

    balls.push(ball);
}

function loop (){
    ctx.fillStyle= "rgb(0 0 0 /25%";
    ctx.fillRect(0,0,width,height);

    for (const ball of balls){
        ball.draw();
        ball.update();
        ball.collisionDetect();

    }

    requestAnimationFrame(loop);

}

loop();