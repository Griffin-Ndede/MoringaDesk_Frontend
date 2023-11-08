import './questions.css'
import './questionMobile.css'
import ResponseCard from './responseCard';
import PostResp from '../popUps/postResponse';
import PatchQn from '../popUps/patchQuestion';
import { useState, useEffect } from 'react';
import { CodeBlock } from "react-code-blocks";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';


function QuestionPage({ tags, questionTags }){

    const qnId = useSelector((state) => state.value);
    const [ editStatus, setEditStatus ] = useState(false)
    const [ patchQuestion, setPatchQuestion ] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://moringa-yjml.onrender.com/questions/${qnId}`)
        .then((res)=> res.json())
        .then(data => {
          setQuestion(data)
        })
      }, [])

    function deleteQuestion(){
        confirmAlert({
            title: 'Delete Question?',
            message: 'Are you sure you want to delete this question?',
            buttons: [
                {
                    label: 'Cancel',
                    onClick: () => {
                        editActions()
                    }
                },
                {
                  label: 'Confirm',
                  onClick: () => {
                    fetch(`https://moringa-yjml.onrender.com/questions/${qnId}`, {
                        method: "DELETE",
                      })
                        .then(response => response.json())
                        .then(() => {
                            alert('Question deleted!')
                            navigate('/FAQs')
                            window.location.reload()
                          })
                  }
                }
              ]
        });

  
    }

    function saveQn(){
        fetch('https://moringa-yjml.onrender.com/saves', {
            method: "POST",
            body: JSON.stringify({
                user_id: 2,
                question_id: qnId,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
            .then(response => {
                response.json()
                alert('Question added to Saves!')
                setEditStatus(!editStatus)
            })
    }
      
    const [ resp, setResp ] = useState(false)
    const [ question, setQuestion ] = useState([])
    

    function addResp(){
        setResp(!resp)
    }

    function patchQN(){
        setPatchQuestion(!patchQuestion)
    }

    function editActions(){
        setEditStatus(!editStatus)
    }

    return(
        <>
            <div id="questionPage">
                
                <div className="questionDiv">
                    <div className="question">
                        <img className='actionDropDown' alt='option menu' src='https://static.thenounproject.com/png/892510-200.png' onClick={editActions}/>
                        {editStatus? <div className='actionButtons'>
                            <button className='editButtons' onClick={saveQn}>Save</button>
                            <button className='editButtons' onClick={() =>(patchQN(), editActions())}>Edit</button>
                            <button className='deleteButtons' onClick={deleteQuestion}>Delete</button>
                        </div>: 
                        <></>}
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
                <button title="Post Response" className="addButtons1" onClick={addResp}> + </button>
                {question.responses?.map((response)=>(
                    <ResponseCard qnId={qnId} respId={response.id} user={response.user.username} userID={response.user.id} solution={response.suggestion} code={response.code} votes={response.votes} />
                ))}
                {resp ? <div className="popUpBackground"><button className='closePopUp' onClick={addResp} >Close</button><PostResp qn={qnId}/></div>: <></>}
                {patchQuestion ? <div className="popUpBackground"><button className='closePopUp' onClick={patchQN} >Close</button><PatchQn tags={tags} questionTags={questionTags} Id={question.id} Title={question.title} Description={question.description} Code={question.code} QnTag={question.tags} UserId={question.user.id}/></div>: <></>}
            </div>
        </>
    )
}

export default QuestionPage