import { CodeBlock } from "react-code-blocks";
import { useState } from "react";
import { useSelector } from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import PatchResp from "../popUps/patchResponse";

function ResponseCard({ respId, user, userID, solution, code, votes }){
    const [ editStatus, setEditStatus ] = useState(false)
    const [ patchResponse, setPatchResponse ] = useState(false)
    const [ upVoteState, setUpVoteState ] = useState(false)
    const [ downVoteState, setDownVoteState ] = useState(false)
    const [ voteCount, setVoteCount ] = useState(votes)
    const userId = useSelector((state) => state.value2?.id)

    function deleteResp(){
        confirmAlert({
            title: 'Delete Response?',
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
                    fetch(`https://moringa-yjml.onrender.com/responses/${respId}`, {
                        method: "DELETE",
                      })
                        .then(response => response.json())
                        .then(() => {
                            alert('Response deleted!')
                            window.location.reload()
                          })
                  }
                }
              ]
        });

  
    }

    function editActions(){
        setEditStatus(!editStatus)
    }

    function patchResp(){
        setPatchResponse(!patchResponse)
    }

    function disableUpVote(){
        setUpVoteState(!upVoteState)
        setVoteCount(votes)
        fetch(`https://moringa-yjml.onrender.com/responses/${respId}`, {
            method: "PATCH",
            body: JSON.stringify({
                votes: votes+=1
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
            .then(response => {
                response.json()
                window.location.reload()
        })

        if(downVoteState === true){
            setDownVoteState(!downVoteState)
            setVoteCount(votes)
            fetch(`https://moringa-yjml.onrender.com/responses/${respId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    votes: votes+=2
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                .then(response => {
                    response.json()
                    window.location.reload()
            })
        }
        console.log(upVoteState)
        console.log(downVoteState)
    }

    function disableDownVote(){
        setDownVoteState(!downVoteState)
        setVoteCount(votes)
        fetch(`https://moringa-yjml.onrender.com/responses/${respId}`, {
            method: "PATCH",
            body: JSON.stringify({
                votes: votes-=1
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
            .then(response => {
                response.json()
                window.location.reload()
        })
            
        if(upVoteState === true){
            setUpVoteState(!upVoteState)
            setVoteCount(votes)
            fetch(`https://moringa-yjml.onrender.com/responses/${respId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    votes: votes-=2
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                .then(response => {
                    response.json()
                    window.location.reload()
            })
        }
        console.log(downVoteState)
        console.log(upVoteState)
    }
    

    return(
        <>
            <div className="responseDiv">
                <div className="response">
                    <img className="userIcon" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
                    <h3 className="questionUserName">@{user}:</h3>
                    {userID === userId? <img className='respActionDropDown' alt='option menu' src='https://static.thenounproject.com/png/892510-200.png' onClick={editActions}/>: <></>}
                        {editStatus? <div className='respActionButtons'>
                            <button className='editButtons' onClick={()=>(patchResp(), setEditStatus())}>Edit</button>
                            <button className='deleteButtons' onClick={deleteResp}>Delete</button>
                        </div>: 
                        <></>}
                    <p className="solution">{solution}</p>
                    <div className='questionCodeBlock'>
                        <CodeBlock
                            text={code}
                            showLineNumbers={false}
                        />
                    </div>
                    <div className='votesDiv'>
                        <button className='voteButtons' disabled={upVoteState} onClick={disableUpVote}><img className="buttonIcon" alt="up button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Up_arrow_white.svg/2048px-Up_arrow_white.svg.png" /></button>
                        <p className="votes">{voteCount}</p>
                        <button className='voteButtons' disabled={downVoteState} onClick={disableDownVote}><img className="buttonIcon2" alt="down button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Up_arrow_white.svg/2048px-Up_arrow_white.svg.png" /></button>                    
                    </div>
                </div>
                {patchResponse ? <div className="popUpBackground"><button className='closePopUp' onClick={patchResp} >Close</button><PatchResp Id={respId} Solution={solution} Code={code} UserId={userID} /></div>: <></>}            

            </div>
        </>
    )
}

export default ResponseCard