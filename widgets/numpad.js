class NumPad {
  constructor(input) {
    this.input = input;
    this.buttons = {};

    // Create stateful buttons for later.
    for (let i = 0; i < 10; i++) {
      let d = document.createElement("button");
      d.className = "numpad-grid-button";
      d.textContent = i;
      d.addEventListener("click", () => { this.handleClick(d) });
      d.name = i;
      this.buttons[i] = d;
    }

    // Enter
    let enter = document.createElement("button");
    enter.textContent = "Enter";
    enter.name = "Enter";
    enter.className = "numpad-grid-button";
    enter.addEventListener("click", () => { this.handleClick(enter) });
    this.buttons["Enter"] = enter;

    // backspace
    let backspace = document.createElement("button");
    backspace.textContent = "␡";
    backspace.name = "Delete";
    backspace.className = "numpad-grid-button";
    backspace.addEventListener("click", () => { this.handleClick(backspace) });
    this.buttons["Delete"] = backspace;
  }

  render() {
    let root = document.createElement("div");
    root.className = "numpad";
    let grid = document.createElement("div");
    grid.className = "numpad-grid";
    for (let i = 1; i <= 10; i++) {
      grid.appendChild(this.buttons[i % 10]);
    }
    root.appendChild(grid);
    grid.appendChild(this.buttons["Delete"]);
    grid.appendChild(this.buttons["Enter"]);
    root.appendChild(grid);
    return root;
  }

  handleClick(e) {
    let i = e.name;
    let original = e.className;
    console.log(e.className);
    e.className = original + "-clicked";
    console.log(this.buttons[i]);
    window.setTimeout(() => e.className = original, 60);
    this.input({ "key": i });
  }
}
