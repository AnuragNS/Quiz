import React from "react";
import Point from "./Point";
import Question from "./Question";
import Answer from "./Answer";
function Quiz() {
  return (
    <div>
      <Point />
      <div className="queans">
        <Question />
        <Answer />
      </div>
    </div>
  );
}
export default Quiz;
