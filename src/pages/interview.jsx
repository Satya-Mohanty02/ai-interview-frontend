import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

import Navbar from "../components/navbar";
import ProgressBar from "../components/progressbar";
import Timer from "../components/timer";
import QuestionCard from "../components/questioncard";

import "../styles/interview.css";

function Interview() {

    const navigate = useNavigate();
    const location = useLocation();

    // Questions received from Home.jsx
    const questions = location.state?.questions || [];

    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");

    const [evaluations, setEvaluations] = useState([]);

    const nextQuestion = async () => {

        if (answer.trim() === "") {

            alert("Please enter your answer.");

            return;
        }

        try {

            const response = await api.post("/evaluate", {

                question: questions[index],

                answer: answer

            });

            const currentEvaluation = response.data;

            const updatedEvaluations = [

                ...evaluations,

                currentEvaluation

            ];

            setEvaluations(updatedEvaluations);

            if (index === questions.length - 1) {

                const report = await api.post(

                    "/generate-report",

                    {

                        evaluations: updatedEvaluations

                    }

                );

                navigate(

                    "/result",

                    {

                        state: report.data

                    }

                );

                return;

            }

            setAnswer("");

            setIndex(index + 1);

        }

        catch (err) {

            console.log(err);

            alert("Unable to evaluate answer.");

        }

    };

    if (questions.length === 0) {

        return (

            <h2 style={{ textAlign: "center", marginTop: "100px" }}>

                No Interview Found

            </h2>

        );

    }

    return (

        <div>

            <Navbar />

            <div className="interview-container">

                <ProgressBar

                    currentQuestion={index + 1}

                    totalQuestions={questions.length}

                />

                <Timer seconds={120} />

                <QuestionCard

                    question={questions[index]}

                    answer={answer}

                    setAnswer={setAnswer}

                    onNext={nextQuestion}

                />

            </div>

        </div>

    );

}

export default Interview;