class RestartPage {
  constructor(params) {
    this.restartEvent = params.restartEvent;
    this.scorer = params.scorer;
  }

  enter() {
    
  }

  render() {
    let root = document.createElement("div");
    root.textContent = "Time is up!";
    let scoreReport = document.createElement("div");
    scoreReport.textContent = `Got: ${this.scorer.correct}`;
    root.appendChild(scoreReport);
    let button = document.createElement("button");
    button.addEventListener("click", this.restartEvent);
    button.textContent = "Restart";
    root.appendChild(button);
    let chart = new ScoreChart({scorer: this.scorer});
    root.appendChild(chart.render());
    return root;
  }

  exit() {
    
  }
}