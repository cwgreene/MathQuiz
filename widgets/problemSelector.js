class ProblemSelector {
  PROBLEM_TYPES = [new PlusTeens(), new Doubles()];

  constructor(index) {
    this.index = 0;
  }
  
  render() {
    let root = document.createElement("select");
    root.className = "problem-selector";
    for(let i in this.PROBLEM_TYPES) {
      console.log(i);
      let option = document.createElement("option");
      option.value = i;
      option.textContent = this.PROBLEM_TYPES[i].name();
      root.appendChild(option);
    }
    root.value = this.index;
    root.onchange = (s) => this.updateIndex(s);
    return root;
  }

  updateIndex(event) {
    console.log(event.target.value);
    this.index = event.target.value;
  }

  getGenerator() {
    return this.PROBLEM_TYPES[this.index];
  }
}