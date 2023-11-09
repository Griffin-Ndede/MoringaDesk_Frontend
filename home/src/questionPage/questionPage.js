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


function QuestionPage(){
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
    const [ questionTags, setQuestionTags ] = useState([])

    useEffect(()=>{
        fetch('https://moringa-yjml.onrender.com/question_tags')
        .then((res)=> res.json())
        .then(data => {
          setQuestionTags(data)
        })
      }, [])
    

    const qnId = useSelector((state) => state.value);
    const userId = useSelector((state) => state.value2.id)
    const [ editStatus, setEditStatus ] = useState(false)
    const [ patchQuestion, setPatchQuestion ] = useState(false)
    const [ resp, setResp ] = useState(false)
    const [ question, setQuestion ] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://moringa-yjml.onrender.com/questions/${qnId}`)
        .then((res)=> res.json())
        .then(data => {
          setQuestion(data)
          console.log(qnId)
        })
    // eslint-disable-next-line
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
                            {question?.user?.id === userId? <button className='editButtons' onClick={() =>{patchQN(); editActions()}}>Edit</button> : <></>}
                            {question?.user?.id === userId? <button className='deleteButtons' onClick={deleteQuestion}>Delete</button> : <></>}
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
                {question.responses?.length > 0? <div>
                {question.responses?.sort((a, b) => (a.votes > b.votes) ? -1 : 1).map((response)=>(
                    <ResponseCard qnId={qnId} respId={response.id} user={response.user?.username} userID={response.user?.id} solution={response.description} code={response.code} votes={response.votes} />
                ))}
                </div>:
                <div className="emptyDiv">
                    <img className='emptyData' alt='No Data' src="https://ouch-cdn2.icons8.com/yep8SwOMXtawFqUAzSTS5Vs2X6ZydXZgpmwwEE_EVPE/rs:fit:368:276/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjc4/L2ZkYmNhOTFhLTkz/NGYtNDRhZC1hNjRi/LTBmMTA1ZDg3YjBi/Yy5zdmc.png"/>
                    <p className='emptyDesc'>No Responses Yet!</p>
                </div>
                }
                {resp ? <div className="popUpBackground"><button className='closePopUp' onClick={addResp} >Close</button><PostResp qn={qnId}/></div>: <></>}
                {patchQuestion ? <div className="popUpBackground"><button className='closePopUp' onClick={patchQN} >Close</button><PatchQn tags={allTags} questionTags={questionTags} Id={question.id} Title={question.title} Description={question.description} Code={question.code} QnTag={question.tags} UserId={question.user?.id}/></div>: <></>}
            </div>
        </>
    )
}

export default QuestionPage