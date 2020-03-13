import React from "react";
import Answer from "./Answer";

function Answers(props) {
  return (
    <>
      <Answer
        letter="a"
        answer={props.question.answer_a}
        handelClick={props.handelClick}
        selected={props.currentAnswer === "a"}
      />
      <Answer
        letter="b"
        answer={props.question.answer_b}
        handelClick={props.handelClick}
        selected={props.currentAnswer === "b"}
      />
      <Answer
        letter="c"
        answer={props.question.answer_c}
        handelClick={props.handelClick}
        selected={props.currentAnswer === "c"}
      />
      <Answer
        letter="d"
        answer={props.question.answer_d}
        handelClick={props.handelClick}
        selected={props.currentAnswer === "d"}
      />
    </>
  );
}

export default Answers;
