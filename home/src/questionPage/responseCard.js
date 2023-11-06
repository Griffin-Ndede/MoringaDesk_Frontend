import { CodeBlock } from "react-code-blocks";
import { useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import PatchResp from "../popUps/patchResponse";

function ResponseCard({ qnId, respId, user, userID, solution, code, votes }){
    const [ editStatus, setEditStatus ] = useState(false)
    const [ patchResponse, setPatchResponse ] = useState(false)

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
                    fetch(`/responses/${respId}`, {
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

    

    return(
        <>
            <div className="responseDiv">
                <div className="response">
                    <img className="userIcon" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
                    <h3 className="questionUserName">@{user}</h3>
                    <img className='respActionDropDown' alt='option menu' src='https://static.thenounproject.com/png/892510-200.png' onClick={editActions}/>
                        {editStatus? <div className='respActionButtons'>
                            <button className='editButtons' onClick={patchResp}>Edit</button>
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
                        <button className='voteButtons'><img className="buttonIcon" alt="up button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Up_arrow_white.svg/2048px-Up_arrow_white.svg.png" /></button>
                        <p className="votes">{votes}</p>
                        <button className='voteButtons'><img className="buttonIcon2" alt="down button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Up_arrow_white.svg/2048px-Up_arrow_white.svg.png" /></button>                    
                    </div>
                </div>
                {patchResponse ? <div className="popUpBackground"><button className='closePopUp' onClick={patchResp} >Close</button><PatchResp Id={respId} Solution={solution} Code={code} UserId={userID} /></div>: <></>}            

            </div>
        </>
    )
}

export default ResponseCard