class PageController {
  constructor(targetId) {
    this.targetId = targetId;

    this.problemSelector = new ProblemSelector();
    this.scorer = new QuizScorer(this.problemSelector);

    let startPage = new StartPage({
      update: (p) => this.renderPage(p.render()),
      selector: this.problemSelector,
    });
    let problemPage = new ProblemPage({
      update: (p) => this.renderPage(p.render()),
      scorer: this.scorer,
      selector: this.problemSelector
    });
    let restartPage = new RestartPage({
      update: (p) => this.renderPage(p.render()),
      scorer: this.scorer,
      selector: this.problemSelector,
    });

    // Wire up pages
    startPage.startEvent = () => this.transition(problemPage);
    problemPage.completeEvent = () => this.transition(restartPage);
    restartPage.restartEvent = () => this.transition(problemPage);

    this.currentPage = startPage;
    this.currentPage.enter();
    this.renderPage(this.currentPage.render());
  }

  transition(page2) {
    this.currentPage.exit();
    this.currentPage = page2;
    page2.enter();
    this.renderPage(page2.render());
  }

  renderPage(newPage) {
    let oldPage = document.getElementById(this.targetId);
    newPage.id = this.targetId;
    oldPage.parentNode.replaceChild(newPage, oldPage)
  }
}