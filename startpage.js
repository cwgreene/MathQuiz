class StartPage {
  constructor(params) {
    this.startEvent = params.startEvent;
    this.update = params.update;
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
    button.textContent = "Start!";
    //let problemSelector = new ProblemSelector();
    button.addEventListener("click", () => {
      console.log("Clicked!");
      return this.startEvent();
    });
    return root;
  }
}