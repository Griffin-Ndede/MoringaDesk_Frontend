import './popups.css'
import React from"react"
import { useState } from 'react'
import { useSelector } from "react-redux";

function PostResp({ qn }){
    const [ description , setDescription ] = useState('')
    const [ code , setCode ] = useState('')
    const userId = useSelector((state) => state.value2.id);

    function handleSubmit(){
        if(description !== ' '){
            fetch('https://moringa-yjml.onrender.com/response', {
                method: "POST",
                body: JSON.stringify({
                    description: description,
                    code: code,
                    user_id: userId,
                    question_id: qn,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                })
                .then(response => {
                    response.json()
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
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