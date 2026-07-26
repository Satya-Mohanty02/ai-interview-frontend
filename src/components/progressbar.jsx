function ProgressBar({ currentQuestion, totalQuestions }) {
  const percentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <span>
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;