import './popups.css'
import React from"react"
import { useState } from 'react'

function PatchResp({ Solution, Code, Id }){
    const [ description , setDescription ] = useState(Solution)
    const [ code , setCode ] = useState(Code)

    function handleSubmit(){
        
        if(description !== ' '){
            fetch(`https://moringa-yjml.onrender.com/responses/${Id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    description: description,
                    code: code,
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
                <h1 className='popUpTitle'>Edit Response</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputDivs">
                        <h3 className="Title">Suggestion: </h3>
                        <textarea id="descInput" className="inputs" defaultValue={Solution}  cols={40} rows={4} onChange={handleDesc} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Solution Code (Optional): </h3>
                        <textarea id="descInput" className="inputs" defaultValue={Code} cols={40} rows={4} onChange={handleCode}/>
                    </div>
                    <button type='submit' className='post'>Update</button>
                </form>
            </div>
        </>
    )
}

export default PatchResp