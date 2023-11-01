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


function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<CreateAccount />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/FAQs' element={<FaqPage />}/>
          <Route path='/tags' element={<TagsPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/questions' element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
