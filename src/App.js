import React, {useState} from 'react';
import './App.css';
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");

  const questions = [
    {   id : 1,
        question : "Who is the best cricketer in the world ?",
        answer_a : "Sachin Tendulkar",
        answer_b : "Virat Kolli",
        answer_c : "Adam Gilchirst",
        answer_d : "Jacques Kallis",
        correct_answer : "a"
    },
    {   id : 2,
        question : "What are the colors in the Indian national flag ?",
        answer_a : "White",
        answer_b : "Orange",
        answer_c : "Green",
        answer_d : "All of the above",
        correct_answer : "d"
    },
]

  const question = questions[currentQuestion];

  const handelClick = e =>{
    setCurrentAnswer(e.target.value);
    setError("");
  }

  const renderError = ()=>{
    if(!error){
      return;
    }
    return <div className="error">{error}</div>
  };

  const renderResultMark = (question, answer) =>{
    if(question.correct_answer === answer.answer){
      return <span className="correct">Correct</span>
    }
    return <span className="failed">Failed</span>
  }

  const renderResultsData =()=>{
    return answers.map(answer=>{
      const question = questions.find(question => 
        question.id === answer.questionId)
        return(
          <div key={question.id}>
              {question.question}  -  
              {renderResultMark(question,answer)}
          </div>
        )
    });
    
  }

  const restart = () =>{
    setAnswers([]);
    setCurrentAnswer("");
    setCurrentQuestion(0);
    setShowResults(false);
  }

  const next = () =>{
    const answer = {questionId:question.id, answer: currentAnswer};
    
    if(!currentAnswer){
      setError("Please Select an option");
      return;
    }

    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer("");

    if(currentQuestion+1 < questions.length){
      setCurrentQuestion(currentQuestion + 1)
      return;
    }
    setShowResults(true);
  }

  if(showResults){
    return(
      <div className="container results">
          <h2>Results</h2>
          <ul>{renderResultsData()}</ul>
          <button className="btn btn-primary" onClick={restart}>
            Restart
      </button>
      </div>
    )
  }else {
    return (
      <div className="container">
      <Progress total={questions.length} current={currentQuestion+1} />
      <Question question={question.question} />
      {renderError()}
      <Answers question={question} handelClick={handelClick} currentAnswer={currentAnswer} />
      <button className="btn btn-primary" onClick={next}>
        Confirm And Containue 
      </button>
      </div>
    );
  }
}

export default App;
