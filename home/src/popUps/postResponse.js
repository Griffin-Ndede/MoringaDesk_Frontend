import './popups.css'
import React from"react"
import { useState } from 'react'

function PostResp({ qn }){
    const [ description , setDescription ] = useState('')
    const [ code , setCode ] = useState('')
    const [ userId, setUserId ] = useState(2)

    function handleSubmit(){
        
        if(description !== ' '){
            fetch('https://moringa-yjml.onrender.com/responses', {
                method: "POST",
                body: JSON.stringify({
                    description,
                    code,
                    user_id: userId,
                    question_id: qn,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                .then(response => {
                    response.json()
                })
                .then(data => {
                    setDescription(" ")
                    setCode(" ")
                })
        }
    }

    function handleDesc(e){
        e.preventDefault()
        setDescription(e.target.value)
        console.log(description)
    }

    function handleCode(e){
        e.preventDefault()
        setCode(e.target.value)
        console.log(code)
    }

    return(
        <>
            <div className="questionPopUp">
                <h1 className='popUpTitle'>Post a Response</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputDivs">
                        <h3 className="Title">Suggestion: </h3>
                        <textarea id="descInput" className="inputs" placeholder={"Enter a Suggestion..."}  cols={40} rows={4} onChange={handleDesc} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Solution Code (Optional): </h3>
                        <textarea id="descInput" className="inputs" placeholder={"Enter Code..."} cols={40} rows={4} onChange={handleCode}/>
                    </div>
                    <button type='submit' className='post'>Post</button>
                </form>
            </div>
        </>
    )
}

export default PostResp