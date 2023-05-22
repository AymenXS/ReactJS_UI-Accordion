import React, { useState } from 'react';
import data from './data';
import Question from './Question';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return <Question {...question} key={question.id} />;
        })}
      </section>
    </main>
  );
};
export default App;
