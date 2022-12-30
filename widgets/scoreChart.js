class ScoreChart {
  constructor(params) {
    this.scorer = params.scorer;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  render() {
    let root = document.createElement("div");
    root.appendChild(this.canvas);
    console.log(this.scorer.scores)
    new Chart(this.canvas, {
      type: 'line',
      data: {
        labels: Object.keys(this.scorer.scores),
        datasets: [{
            label: "Score",
            data: this.scorer.scores
          }
        ]
      },
      options: {
        "xAxis": {
          startAtZero: true
        }
      }
    });
    return root;
  }
}