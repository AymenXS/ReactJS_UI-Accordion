import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question" key={id}>
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showInfo && info}</p>
    </article>
  );
};

export default Question;
