function ScoreCard({ studentName, subject, score, grade, passed }) {
  let bgColor;
  if (score >= 90) {
    bgColor = "#d4edda"; // Light green
  } else if (score >= 70) {
    bgColor = "#fff3cd"; // Light yellow
  } else {
    bgColor = "#f8d7da"; // Light red
  }

  return (
    <div className="score-card" style={{ backgroundColor: bgColor }}>
      <h3>{studentName}</h3>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
      <p className="score-big">{score}/100</p>
      <p>
        <strong>Grade:</strong> {grade}
      </p>
      <p className={passed ? "passed" : "failed"}>
        {passed ? "✅ Passed" : "❌ Failed"}
      </p>
    </div>
  );
}

export default ScoreCard;
