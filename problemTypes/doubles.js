class Doubles extends ProblemGenerator {
  name() {
    return "Doubles";
  }
  
  generateProblem() {
    let operand1 = Math.floor(Math.random()*100);
    let operand2 = 2;
    let solution = null;
    let checker = (p) => this.checkSolution(p);
    let p= new Problem({
                        operand1,
                        operand2,
                        operator: "x",
                        solution,
                        checker
    });
    return p;
  }
  
  checkSolution(p) {
    return p.operand1 * p.operand2 === p.solution;
  }
}