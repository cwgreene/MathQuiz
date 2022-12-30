class StartPage {
  constructor(params) {
    this.startEvent = params.startEvent;
    this.update = params.update;
    this.problemSelector = params.selector;
  }

  enter() {
    
  }

  exit() {
    console.log("Exiting!");
  }
  
  render() {
    let root = document.createElement("div");
    let button = document.createElement("button");
    root.appendChild(button);
    button.className = "start-button";
    button.textContent = "Start!";
    button.addEventListener("click", () => {
      console.log("Clicked!");
      return this.startEvent();
    });
    root.appendChild(this.problemSelector.render());
    return root;
  }
}
