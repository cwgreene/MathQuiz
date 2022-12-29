class Problem {
  constructor(params) {
    this.operand1 = params.operand1;
    this.operand2 = params.operand2;
    this.operator = "+";
    this.solution = params.solution;
  }
  
  generateDivsArray(n) {
    return Array.from(Array(n)).map(() => {
      var d = document.createElement("div");
      return d;
    });
  }

  renderOperandInArray(operand, array, startRow, startColumn) {
    var rem = operand;
  
    if (operand === 0) {
      array[startRow][startColumn].textContent = 0;
      return;
    }
    
    for (var i = 0; i < Math.floor(Math.log10(operand)) + 1; i++) {
      array[startRow][startColumn - i].textContent = rem % 10;
      rem = Math.floor(rem / 10);
    }
  }

  render() {
    var p = document.createElement("div");
    p.className = "problem-horizontal";
    p.textContent = `${this.operand1} + ${this.operand2} =`
      + ` ${this.solution != null ? this.solution : ""}`;
    return p;
  }

  checkSolution() {
    return this.operand1 + this.operand2 === this.solution;
  }
}