import './App.css';

import NavBar from './navBar';
import HomePage from './homePage/home';
import FaqPage from './FAQPage/faqPage';
import QuestionPage from './questionPage/questionPage';
import TagsPage from './tagsPage/tagsPage';
import UserPage from './userPage/userPage';
import LoginPage from './login/login';
import CreateAccount from './signup/sighnup';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {
  const [ questions, setQuestions ] = useState([])
  const initialState = { questionId: 1 }

  useEffect(()=>{
    fetch('/questions')
    .then((res)=> res.json())
    .then(data => {
      setQuestions(data)
    })
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<CreateAccount />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/FAQs' element={<FaqPage questions={questions} />}/>
          <Route path='/tags' element={<TagsPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/questions/:id' element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
