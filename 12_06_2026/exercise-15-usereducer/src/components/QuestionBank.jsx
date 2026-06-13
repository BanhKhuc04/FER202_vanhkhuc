import { useReducer } from "react";

const initialState = {
  questions: [
    { id: 1, question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], answer: "Canberra" },
    { id: 2, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { id: 3, question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { id: 4, question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" },
    { id: 5, question: "Which element has the symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Oganesson"], answer: "Oxygen" },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION": {
      const correct = state.questions[state.currentQuestion].answer;
      const newScore = state.selectedOption === correct ? state.score + 1 : state.score;
      const next = state.currentQuestion + 1;
      if (next >= state.questions.length) {
        return { ...state, score: newScore, showScore: true };
      }
      return { ...state, score: newScore, currentQuestion: next, selectedOption: "" };
    }

    case "RESTART_QUIZ":
      return { ...initialState };

    default:
      return state;
  }
}

export default function QuestionBank() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOptionSelect = (option) =>
    dispatch({ type: "SELECT_OPTION", payload: option });

  const handleNextQuestion = () => dispatch({ type: "NEXT_QUESTION" });
  const handleRestartQuiz = () => dispatch({ type: "RESTART_QUIZ" });

  if (state.showScore) {
    return (
      <div className="quiz-card">
        <h3>Quiz Complete!</h3>
        <p>Your score: <strong>{state.score} / {state.questions.length}</strong></p>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const current = state.questions[state.currentQuestion];

  return (
    <div className="quiz-card">
      <p className="question-counter">Question {state.currentQuestion + 1} / {state.questions.length}</p>
      <h3>{current.question}</h3>
      <div className="options">
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleOptionSelect(opt)}
            className={state.selectedOption === opt ? "selected" : ""}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        disabled={!state.selectedOption}
        className="next-btn"
      >
        {state.currentQuestion + 1 === state.questions.length ? "Finish" : "Next →"}
      </button>
    </div>
  );
}
