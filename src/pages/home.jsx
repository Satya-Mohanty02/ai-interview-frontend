import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import api from "../services/api";
import "../styles/home.css";

function Home() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [resume, setResume] = useState(null);
    const [type, setType] = useState("Java");
    const [difficulty, setDifficulty] = useState("Easy");
    const [loading, setLoading] = useState(false);

    const handleStart = async () => {

        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        setLoading(true);

        try {

            const formData = new FormData();

            formData.append("name", name);
            formData.append("type", type);
            formData.append("difficulty", difficulty);

            if (resume) {
                formData.append("resume", resume);
            }

            const response = await api.post(
                "/start-interview",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            navigate("/interview", {
                state: {
                    name,
                    questions: response.data.questions
                }
            });

        } catch (error) {
    console.log(error);

    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
    }

    alert("Unable to start interview.");

        } finally {

            setLoading(false);

        }
    };

    return (
    <>
        <Navbar />

        <div className="home-container">

            <div className="home-card">

                <h1>AI Interview Simulator</h1>

                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Upload Resume (Optional)</label>
                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                />

                <label>Interview Type</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option>Java</option>
                    <option>HR</option>
                    <option>DSA</option>
                    <option>DBMS</option>
                    <option>OS</option>
                    <option>CN</option>
                    <option>Python</option>
                </select>

                <label>Difficulty</label>
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>

                <button
                    onClick={handleStart}
                    disabled={loading}
                >
                    {loading ? "Generating Questions..." : "Start Interview"}
                </button>

            </div>

        </div>
    </>
);
}

export default Home;