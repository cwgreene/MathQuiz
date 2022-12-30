class Problem {
  constructor(params) {
    this.operand1 = params.operand1;
    this.operand2 = params.operand2;
    this.operator = params.operator;
    this.checker = params.checker;
    this.solution = params.solution;
  }

  render() {
    var p = document.createElement("div");
    p.className = "problem-horizontal";
    p.textContent = `${this.operand1} ${this.operator} ${this.operand2} =`
      + ` ${this.solution != null ? this.solution : ""}`;
    return p;
  }

  checkSolution() {
    return this.checker(this);
  }
}