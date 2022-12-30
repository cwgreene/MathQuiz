class TimeScoreChart {
  constructor(params) {
    this.scorer = params.scorer;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  convertTimes(scores, startTime) {
    let result = [];
    for(let event of scores) {
      console.log(event, startTime);
      result.push({x: (event.endTime - startTime)/1000, y: 1})
    }
    console.log(result);
    return result;
  }

  render() {
    let root = document.createElement("div");
    root.appendChild(this.canvas);
    new Chart(this.canvas, {
      type: 'scatter',
      data: {
        datasets: [{
            label: 'Correct',
            data: this.convertTimes(this.scorer.problems, this.scorer.startTime),
            pointBackgroundColor: "LightGreen"
          }, {
            label: 'Incorrect',
            data: this.convertTimes(this.scorer.mistakes, this.scorer.startTime),
            pointBackgroundColor: "Red",
          }
        ]
      },
      options: {
        scales: {
          xAxes: {
            ticks: {
              beginAtZero: true
            }
          },
          yAxes: {
            ticks: {
              beginAtZero: true
            }
          }
        }
      }
    });
    return root;
  }
}