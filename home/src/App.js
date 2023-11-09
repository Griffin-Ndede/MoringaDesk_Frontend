import './App.css';

import NavBar from './navBar';
import HomePage from './homePage/home';
import FaqPage from './FAQPage/faqPage';
import QuestionPage from './questionPage/questionPage';
import TagsPage from './tagsPage/tagsPage';
import FilteredTag from './tagsPage/filteredTagPage';
import UserPage from './userPage/userPage';
import LoginPage from './login/login';
import CreateAccount from './signup/sighnup';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';




function App() {
  const [ allTags, setAllTags ] = useState([])
  useEffect(()=>{
    fetch('https://moringa-yjml.onrender.com/tags')
    .then((res)=> res.json())
    .then(data => {
      setAllTags(data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
  }, [])

  
  return (
    <>
      <NavBar tags={allTags}/>
      <Routes>
          <Route exact path="/" element={<CreateAccount />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/FAQs' element={<FaqPage />}/>
          <Route path='/tags' element={<TagsPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/questions/:id' element={<QuestionPage />} />
          <Route path='/tags/:name' element={<FilteredTag allTags={allTags} />} />
      </Routes>
    </>
  );
}

export default App;
