class PlusTeens extends ProblemGenerator {
  name() {
    return "Plus Teens";
  }
  
  generateProblem() {
    let operand1 = 10 * Math.floor(Math.random() * 9 + 1);
    let operand2 = Math.floor(Math.random() * 10) + 10;
    let solution = null;
    return new Problem({ operand1, operand2,
                        operator: "+", solution });
  }

  checkSolution() {
    return this.operand1 + this.operand2 === this.solution;
  }
}