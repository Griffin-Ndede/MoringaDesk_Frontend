import './App.css';

import NavBar from './navBar';
import HomePage from './homePage/homePage';
import FaqPage from './FAQPage/faqPage';
import QuestionPage from './questionPage/questionPage';
import TagsPage from './tagsPage/tagePage';
import UserPage from './userPage/userPage';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/FAQs' element={<FaqPage />}/>
          <Route path='/tags' element={<TagsPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/questions' element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
