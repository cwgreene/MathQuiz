class QuizScorer {
  constructor() {
    this.reset();
    this.scores = [];
  }

  start() {
    this.reset();
  }

  end() {
    this.scores.push(this.problems.length);
  }

  recordCorrect(problem, startTime, key) {
    this.correct += 1;
    let solvedTime = new Date();
    let elapsedTime = solvedTime - startTime;
    this.problems.push({problem, startTime, elapsedTime, endTime: solvedTime});
  }

  recordIncorrect(problem, startTime, key) {
    this.incorrect += 1;
    let errorTime = new Date();
    let elapsed = errorTime - startTime;
    this.mistakes.push({problem, startTime, endTime: errorTime, elapsed});
  }

  reset() {
    this.startTime = new Date();
    this.correct = 0;
    this.incorrect = 0;
    this.problems = [];
    this.mistakes = [];
  }
}