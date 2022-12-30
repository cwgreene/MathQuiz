class QuizScorer {
  constructor(key) {
    this.reset(this.key);
    this.scores = {};
  }

  start(key) {
    this.reset(key);
  }

  end() {
    if (this.scores[this.key] === undefined) {
      this.scores[this.key] = [];
    }
    this.scores[this.key].push(this.correct)
  }

  recordCorrect(problem, startTime) {
    this.correct += 1;
    let solvedTime = new Date();
    let elapsedTime = solvedTime - startTime;
    this.problems.push({problem, startTime, elapsedTime, endTime: solvedTime});
  }

  recordIncorrect(problem, startTime) {
    this.incorrect += 1;
    let errorTime = new Date();
    let elapsed = errorTime - startTime;
    this.mistakes.push({problem, startTime, endTime: errorTime, elapsed});
  }

  reset(key) {
    this.startTime = new Date();
    this.correct = 0;
    this.incorrect = 0;
    this.problems = [];
    this.mistakes = [];
    this.key = key;
  }
}