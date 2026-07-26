import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/resultcard";
import "../styles/result.css";

function Result() {
    const navigate = useNavigate();
    const location = useLocation();

    const report = location.state;

    if (!report) {
        return (
            <div className="result-container">
                <h2>No Report Found</h2>

                <button
                    className="restart-btn"
                    onClick={() => navigate("/")}
                >
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <div className="result-container">

            <ResultCard
                score={report.score}
                strengths={report.strengths || []}
                weaknesses={report.weaknesses || []}
            />

            {/* Suggestions */}

            <div className="feedback-box">

                <h2>Suggestions</h2>

                <ul>
                    {(report.suggestions || []).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>

            {/* Correct Answers */}

            <div className="feedback-box">

                <h2>Correct Answers</h2>

                {(report.correct_answers || []).map((answer, index) => (

                    <div
                        key={index}
                        className="answer-card"
                    >

                        <h3>Question {index + 1}</h3>

                        {Array.isArray(answer) ? (

                            <ul>
                                {answer.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                        ) : (

                            <p>{answer}</p>

                        )}

                    </div>

                ))}

            </div>

            <button
                className="restart-btn"
                onClick={() => navigate("/")}
            >
                Take Another Interview
            </button>

        </div>
    );
}

export default Result;