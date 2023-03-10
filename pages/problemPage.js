class ProblemPage {

  constructor(params) {
    this.currentProblem = null;
    this.completeEvent = params.completeEvent;
    this.scorer = params.scorer;
    this.problemSelector = params.selector;

    this.update = params.update;

    this.numpad = new NumPad((e) => this.inputHandler(e));
  }

  enter() {
    this.generator = this.problemSelector.getGenerator();
    this.beginNewProblem();
    this.inputHandlerCb = (e) => this.inputHandler(e);
    this.timer = new Timer(45, { width: 600, height: 10 }, this.completeEvent);
    document.addEventListener("keydown", this.inputHandlerCb);
    this.scorer.start(this.generator.name());

    this.timer.start();
  }

  inputHandler(event) {
    if ("0123456789".includes(event.key)) {
      this.currentProblem.solution = 10 * this.currentProblem.solution + parseInt(event.key);
      this.update(this);
    }
    if (event.key === "Backspace" || event.key === "Delete") {
      this.currentProblem.solution = Math.floor(this.currentProblem.solution / 10);
      this.update(this);
    }
    if (event.key === "Enter") {
      if (this.currentProblem.checkSolution()) {
        this.scorer.recordCorrect(this.currentProblem, this.timeInfo, this.generator.name());
        this.beginNewProblem();
        this.update(this);
      } else {
        this.scorer.recordIncorrect(this.currentProblem);
        this.currentProblem.solution = 0;
        this.update(this);
      }
    }
  }

  exit() {
    this.scorer.end();
    document.removeEventListener("keydown", this.inputHandlerCb);
  }

  render() {
    var root = document.createElement("div");
    root.appendChild(this.timer.render());
    root.appendChild(document.createElement("div"));
    root.appendChild(this.currentProblem.render());
    root.appendChild(document.createElement("div"));
    root.appendChild(this.numpad.render());
    return root;
  }

  beginNewProblem() {
    this.currentProblem = this.generator.generateProblem();
    this.timeInfo = new Date();
  }

}