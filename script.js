const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
const totalFlowers = 108;
const flowerArray = [];
const flowerImage = new Image();
flowerImage.src = 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Flowers-PNG/Hibiscus_Flower_PNG_Clipart.png?m=1581669497';
flowerImage.addEventListener("load", () => {
    for (let i = 0; i < totalFlowers; i++) { flowerArray.push(new Flower()); }
    render();
});
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowerArray.forEach(flower => flower.animate());
    window.requestAnimationFrame(render);
}
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
class Flower {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height * 2) - canvas.height;
        this.w = 25 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();
        this.xSpeed = 1.5 + Math.random() * 2;
        this.ySpeed = 1 + Math.random();
        this.flipSpeed = Math.random() * 0.03;
    }
    draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
            this.x = -flowerImage.width;
            this.y = (Math.random() * canvas.height * 2) - canvas.height;
            this.xSpeed = 1.5 + Math.random() * 2;
            this.ySpeed = 1 + Math.random();
            this.flip = Math.random();
        }
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(flowerImage, this.x, this.y, this.w * (0.6 + (Math.abs(Math.cos(this.flip)) / 3)), this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 5)));
    }
    animate() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.flip += this.flipSpeed;
        this.draw();
    }
}

