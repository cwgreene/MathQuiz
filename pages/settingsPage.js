class SettingsPage extends Page {
  constructor(params) {
    super();
    this.returnAction = params.returnAction;
    this.clearData = params.clearData;
  }
  
  render() {
    let root = document.createElement("div");
    let clearData = document.createElement("button");
    clearData.textContent = "Clear Data";
    clearData.onclick = (e) => this.clearData(e);
    let returnButton = document.createElement("button")
    returnButton.textContent = "Back";
    returnButton.onclick = (e) => this.returnAction(e);
    root.appendChild(returnButton);
    root.appendChild(clearData);
    return root;
  }
}