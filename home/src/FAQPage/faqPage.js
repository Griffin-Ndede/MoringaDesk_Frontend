import './faq.css'
import './faqMobile.css'
import FaqCard from './faqCard'
import RecentCard from './recentQnCard'
import PostQn from '../popUps/postQuestion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'


function FaqPage({ questions, tags }){
    const [ ask, setAsk ] = useState(false)
    const navigate = useNavigate() 
    const user = useSelector((state)=> state.value2)

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

    if(user.id !== 0){
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
                    {questions.filter(question => question.user_id === 6).map((question)=>(
                        <FaqCard key={question.id} title={question.title} id={question.id} />
                    ))}
                </div>
                <div id="recents">
                    <h2 id="Recents">Recent Questions</h2>
                    {filteredQuestions.length > 0? <div>
                    {filteredQuestions.filter(question => question.user_id !== 6).reverse().map((question)=>(
                        <RecentCard key={question.id} id={question.id} username={question.user?.username} title={question.title} tags={question.tags?.map((tag) => (tag.name))} replyCount={question.responses?.length} date={question.created_at} />
                    ))}
                    </div>:
                    <div className="emptyDiv1">
                        <img className='emptyData' alt='No Data' src="https://ouch-cdn2.icons8.com/yep8SwOMXtawFqUAzSTS5Vs2X6ZydXZgpmwwEE_EVPE/rs:fit:368:276/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjc4/L2ZkYmNhOTFhLTkz/NGYtNDRhZC1hNjRi/LTBmMTA1ZDg3YjBi/Yy5zdmc.png"/>
                    <p className='emptyDesc'>No Matching Results!</p>
                </div>
                    }
                </div>
            </div>
            <button title="Post Question" className="addButtons" onClick={addQn}> + </button>
            {ask ? <div className="popUpBackground"><button className='closePopUp' onClick={addQn} >Close</button><PostQn newId={questions.length + 1} allTags={tags} /></div>: <></>}
        </div>
        </>
    )}else{
        navigate('/')
    }
}

export default FaqPage