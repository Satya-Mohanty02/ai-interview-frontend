function ResultCard({
  score,
  strengths,
  weaknesses
}) {
  return (
    <div className="result-card">

      <h2>Interview Result</h2>

      <h1>{score}/100</h1>

      <h3>Strengths</h3>

      <ul>
        {strengths.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Weaknesses</h3>

      <ul>
        {weaknesses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default ResultCard;