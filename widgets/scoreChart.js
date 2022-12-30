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
    let datasets = [];
    let maxLength = 0;
    for(let key in this.scorer.scores) {
      datasets.push({
        label: key,
        data: this.scorer.scores[key]
      });
      let length = this.scorer.scores[key].length;
      maxLength = Math.max(maxLength, length);
    }
    console.log(maxLength);
    let range = [...Array(maxLength).keys()];
    console.log(range);
    new Chart(this.canvas, {
      type: 'line',
      data: {
        labels: range,
        datasets: datasets
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