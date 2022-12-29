class ProblemSelector {
  PROBLEM_TYPES = [];
  render() {
    let root = document.createElement("select")
    for(let index in this.PROBLEM_TYPES) {
      let option = document.createElement("option");
      option.value = index;
      option.textContent = ptype.name();
    }
  }
}