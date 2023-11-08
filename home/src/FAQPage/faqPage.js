import './faq.css'
import './faqMobile.css'
import FaqCard from './faqCard'
import RecentCard from './recentQnCard'
import PostQn from '../popUps/postQuestion'
import { useState } from 'react'


function FaqPage({ questions, tags }){

    const [ ask, setAsk ] = useState(false)

    function addQn(){
        setAsk(!ask)
        console.log(ask)
    }

    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredQuestions = questions.filter((question) =>
        (question.title.toLowerCase() || question.description.toLowerCase()).includes(search.toLowerCase())
    );

    return(
        <>
        <div id="FAQBody">
            <div id="faqHeader">
                <h1 id="faqTitle">Help Desk</h1>
                <input placeholder="Search..." defaultValue={search} onChange={handleSearch} id="faqSearch"></input>
                <img id="headerLogo" alt="Moringa logo" src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo-white.png" />
            </div>
            <div id="faqBody">
                <div id="faqs">
                    <h2 id="FAQs">FAQs</h2>
                    {questions.filter(question => question.user_id === 1).map((question)=>(
                        <FaqCard title={question.title} id={question.id} />
                    ))}
                </div>
                <div id="recents">
                    <h2 id="Recents">Recent Questions</h2>
                    {filteredQuestions.filter(question => question.user_id !== 1).reverse().map((question)=>(
                        <RecentCard id={question.id} username={question.user.username} title={question.title} tags={question.tags.map((tag) => (tag.name))} replyCount={question.responses.length} date={question.created_at} />
                    ))}
                </div>
            </div>
            <button title="Post Question" className="addButtons" onClick={addQn}> + </button>
            {ask ? <div className="popUpBackground"><button className='closePopUp' onClick={addQn} >Close</button><PostQn newId={questions.length + 1}/></div>: <></>}
        </div>
        </>
    )
}

export default FaqPage