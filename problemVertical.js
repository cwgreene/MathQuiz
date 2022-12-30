class ProblemVertica extends Problem {

  render() {
    var p = document.createElement("div");
    var p2 = document.createElement("div");
    p.appendChild(p2);
    p.className = "problem";
    p2.className = "problem-grid";
    var operands = [this.operand1, this.operand2];
    var grid = [this.generateDivsArray(3), this.generateDivsArray(3)];

    // Render Numbers
    this.renderOperandInArray(operands[0], grid, 0, 2);
    this.renderOperandInArray(operands[1], grid, 1, 2)

    // Add operator
    grid[1][0].textContent = "+";

    // Flatten Grid;
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 3; j++) {
        p2.appendChild(grid[i][j]);
      }
    }
    var solution = document.createElement("div");
    solution.className = "solution-grid";
    p.appendChild(solution);

    // Handle null solution
    if (this.solution === null) {
      return p;
    }

    // Render solution
    var grid = [this.generateDivsArray(3)];
    this.renderOperandInArray(this.solution, grid, 0, 2);
    for (var i = 0; i < 3; i++) {
      solution.appendChild(grid[0][i]);
    }
    return p;
  }
}