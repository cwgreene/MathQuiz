class ProblemGenerator {
  constructor () {
    
  }

  // Overide this to have a different display name
  name() {
    return this.constructor.name;
  }

  generateProblem() {
    return {operand1: 1, operator: "+", operand2: 2,
           solution: 3}
  }
}