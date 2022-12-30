class Doubles extends ProblemGenerator {
  name() {
    return "Doubles";
  }
  
  generateProblem() {
    let operand1 = Math.floor(Math.random()*100);
    let operand2 = 2;
    let solution = null;
    let p= new Problem({
                        operand1,
                        operand2,
                        operator: "x",
                        solution,
                        checker:
                          (op1,op2,soln) =>
                            this.checkSolution(op1, op2, soln)
                       });
    return p;
  }
  
  checkSolution(op1, op2, soln) {
    console.log(op1,op2,soln,op1*op2===soln);
    return op1 * op2 === soln;
  }
}