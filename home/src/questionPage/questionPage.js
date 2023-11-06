import './questions.css'
import ResponseCard from './responseCard';
import PostResp from '../popUps/postResponse';
import { useState, useEffect } from 'react';
import { CodeBlock } from "react-code-blocks";
import { useSelector } from "react-redux";

function QuestionPage(){

    const qnId = useSelector((state) => state.theStore.value);

    useEffect(()=>{
        fetch(`/questions/${qnId}`)
        .then((res)=> res.json())
        .then(data => {
          setQuestion(data)
        })
      }, [])
      
    const [ resp, setResp ] = useState(false)
    const [ question, setQuestion ] = useState([])
    

    function addResp(){
        setResp(!resp)
    }

    return(
        <>
            <div id="questionPage">
                
                <div className="questionDiv">
                    <div className="question">
                        <img className='actionDropDown' alt='option menu' src='https://static.thenounproject.com/png/892510-200.png'/>
                        <div className='actionButtons'>
                            <button className='editButtons'>Edit</button>
                            <button className='deleteButtons'>Delete</button>
                        </div>
                        <img className="userIcon" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
                        <h3 className="questionUserName">@{question.user?.username}:</h3>
                        <h1 className="questionTitle">{question.title}</h1>
                        <p className='questionDescription'>{question.description}</p>
                        <div className='questionCodeBlock'>
                            <CodeBlock
                                text={question.code}
                                showLineNumbers={false}
                            />
                        </div>
                    </div>
                </div>
                <h2 id="Solutions">Solutions: </h2>
                {question.responses?.map((response)=>(
                    <ResponseCard user={response.user.username} solution={response.suggestion} code={response.code} votes={response.votes} />
                ))}
                <button className="addButtons1" onClick={addResp}> + </button>
                {resp ? <div className="popUpBackground"><button className='closePopUp' onClick={addResp} >Close</button><PostResp qn={qnId}/></div>: <></>}

            </div>
        </>
    )
}

export default QuestionPage