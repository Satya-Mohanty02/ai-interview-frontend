function QuestionCard({
  question,
  answer,
  setAnswer,
  onNext
}) {
  return (
    <div className="question-card">

      <h2>{question}</h2>

      <textarea
        rows="8"
        placeholder="Type your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button onClick={onNext}>
        Next Question
      </button>

    </div>
  );
}

export default QuestionCard;