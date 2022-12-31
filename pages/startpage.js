class StartPage {
  constructor(params) {
    this.startEvent = params.startEvent;
    this.update = params.update;
    this.problemSelector = params.selector;
    this.settingsEvent = params.settingsEvent;
  }

  enter() {

  }

  exit() {

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
    let settings = document.createElement("button");
    settings.addEventListener("click", () => {
      this.settingsEvent();
    });
    settings.textContent = "Settings";
    root.appendChild(settings);
    return root;
  }
}
