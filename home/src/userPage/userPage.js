import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import './userPage.css'

function UserPage() {
  
  const [activeButton, setActiveButton] = useState('Saves');
  const userData = useSelector((state) => state.value2);
  const saves = userData?.saves;
  const responses = userData?.responses;
  const questions = userData?.questions;


  // const userId = userData?.id;
  const username = userData?.username
  const created_at = userData?.created_at

  // useEffect(() => {
  //   if (userId) {
  //     fetch(`https://moringa-yjml.onrender.com/saves/${userId}`)
  //       .then((res) => res.json())
  //       .then((saves) => setSaves(saves));
  //   }
  // }, [userId]);

  // useEffect(() => {
  //   if (userId) {
  //     fetch(`https://moringa-yjml.onrender.com/responses/${userId}`)
  //       .then((res) => res.json())
  //       .then((responses) => setResponses(responses));
  //   }
  // }, [userId]);

  // useEffect(() => {
  //   if (userId) {
  //     fetch(`https://moringa-yjml.onrender.com/questions/${userId}`)
  //       .then((res) => res.json())
  //       .then((questions) => setQuestions(questions));
  //   }
  // }, [userId]);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };


  return (
    <>
      <div id='header'>
        <img src='./Default_pfp.png' alt='Default pfp' />
        <div id="header-content">
          <div>
          {username ? (
        <h1>{username}</h1>
      ) : (
        <h1>User</h1>
      )}
            <p>Member since {created_at}</p>
          </div>
          <div>
          <button onClick={() => handleClick('Saves')}>Saves</button>
            <button onClick={() => handleClick('My Questions')}>Questions</button>
            <button onClick={() => handleClick('My Responses')}>Responses</button>
          </div>
        </div>
      </div>

      {activeButton === 'Saves' && (
        <>
          <h2>My Saves</h2>
          <div className="questions">
            {saves.map((save) => (
              <div key={save.id}>
                <h3>{save.question.title}</h3>
                <button>{save.question.tag}</button>
              </div>
            ))}
          </div>
        </>
      )}

      {activeButton === 'My Questions' && (
        <>
          <h2>My Questions</h2>
          <div className="questions">
            {questions.map((question) => (
              <div key={question.id}>
                <h3>{question.title}</h3>
                <p>{question.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {activeButton === 'My Responses' && (
        <>
          <h2>My Responses</h2>
          <div className="questions">
            {responses.map((response) => (
              <div key={response.id}>
                <h3>{response.suggestion}</h3>
                <p>{response.code}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default UserPage;
