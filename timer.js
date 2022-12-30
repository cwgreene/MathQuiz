class Timer {
  constructor(time, size, finishedCallback) {
    // Data
    this.elapsed = 0;
    this.totalTime = time*1000;
    this.cb = finishedCallback;
    this.animationCb = null;
    this.finishedCallback = finishedCallback;

    // Canvas
    this.canvas = document.createElement("canvas");
    this.canvas.width = size.width;
    this.canvas.height = size.height;
    this.ctx = this.canvas.getContext("2d");
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let pct = 1 - this.elapsed/ this.totalTime;
    if (pct <= 0 ) {
      pct = 0;
    }
    this.ctx.fillRect(0, 0, this.canvas.width * pct, this.canvas.height);
    return this.canvas;
  }

  start() {
    this.startingTime = new Date();
    this.animationCb = window.requestAnimationFrame(() => this.step());
  }
  
  step() {
    this.elapsed = new Date() - this.startingTime;
    //console.log(this.elapsed);
    this.render();
    if (this.elapsed <= this.totalTime) {
      this.animationCb = window.requestAnimationFrame(()=>this.step());
    } else {
      this.finishedCallback();
    }
  }
}
/* Test code
var x = new Timer(60000, {width: 600, height: 10}, null);
document.body.appendChild(x.render());
x.start();
*/