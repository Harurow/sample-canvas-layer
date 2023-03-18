let body = document.body;
let canvas1 = null;
let ctx1 = null;
let canvas2 = null;
let ctx2 = null;
let canvas3 = null;
let ctx3 = null;

const init = () => {
  body = document.body;

  canvas1 = createCanvas("canvas1");
  ctx1 = canvas1.getContext("2d");

  canvas2 = createCanvas("canvas2");
  ctx2 = canvas2.getContext("2d");
  canvas2.style.top = "100px";
  canvas2.style.left = "100px";

  canvas3 = createCanvas("canvas3");
  ctx3 = canvas3.getContext("2d");
  canvas3.style.top = "200px";
  canvas3.style.left = "200px";

  drawCanvas1(ctx1);
  drawCanvas2(ctx2);
  drawCanvas3(ctx3);
};

const drawCanvas1 = (ctx) => {
  ctx.fillStyle = "rgba(255, 127, 0, 0.9)";
  ctx.fillRect(0, 0, 300, 300);
};

const drawCanvas2 = (ctx) => {
  ctx.fillStyle = "rgba(0, 255, 127, 0.9)";
  ctx.fillRect(0, 0, 300, 300);
};

const drawCanvas3 = (ctx) => {
  ctx.fillStyle = "rgba(127, 0, 255, 0.9)";
  ctx.fillRect(0, 0, 300, 300);
};

const createCanvas = (id) => {
  const canvas = document.createElement("canvas");
  canvas.id = id;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  body.append(canvas);
  return canvas;
};

window.onload = () => {
  init();
};

window.onresize = () => {
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
  canvas3.width = window.innerWidth;
  canvas3.height = window.innerHeight;

  drawCanvas1(ctx1);
  drawCanvas2(ctx2);
  drawCanvas3(ctx3);
};
