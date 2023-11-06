import './popups.css'
import React from"react"
import { useState, useEffect } from 'react'

function PatchQn({ tags, questionTags, Id, Title, Description, Code, QnTag, UserId }){
    let QnTagName = []
    QnTag.forEach(tag => QnTagName.push(tag.name))
    console.log(QnTagName)
    const [ title, setTitle ] = useState(Title)
    const [ description , setDescription ] = useState(Description)
    const [ code , setCode ] = useState(Code)
    const [ qnTag , setQnTag ] = useState(QnTagName)
    const [ userId, setUserId ] = useState(UserId)

    function handleSubmit(){
        
        if(title !== ' ' && description !== ''){
            questionTags.filter(questionTag => questionTag.question_id === Id).forEach((tag) =>{
                fetch(`/questiontags/${tag.id}`, {
                    method: "DELETE",
                })
                    .then(response => response.json())
                    .then(() => {
                        return "questiontag deleted successfully"
            })})

            fetch(`/questions/${Id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    title,
                    description,
                    code,
                    userId,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                .then(response => {
                    response.json()
                })
                .then(
                    qnTag.forEach(tag => {
                        let tagId = tags.filter(tags => tags.name === tag)[0].id
                        fetch('/questiontags', {
                            method: "POST",
                            body: JSON.stringify({
                                tagId,
                                questionId: Id,
                              }),
                              headers: {
                                "Content-type": "application/json; charset=UTF-8",
                              },
                            })
                            .then(response => {
                                response.json()
                            })
                    })
                )
                .then(data => {
                    setTitle(" ")
                    setDescription(" ")
                    setCode(" ")
                    setQnTag([])
                })
        }
    }

    function addTag(e, tag){
        e.preventDefault()
        if(qnTag.includes(tag) === false){
            setQnTag([...qnTag, tag])
            console.log([...qnTag, tag])
        }
    }

    function removeTag(e, tag){
        e.preventDefault()
        if(qnTag.includes(tag) === true){
            let array = [...qnTag]
            let index = array.indexOf(tag)
            array.splice(index, 1)
            setQnTag(array)
        }
    }

    function handleTitle(e){
        e.preventDefault()
        setTitle(e.target.value)
        console.log(title)
    }

    function handleDesc(e){
        e.preventDefault()
        setDescription(e.target.value)
        console.log(`${description}`)
    }

    function handleCode(e){
        e.preventDefault()
        setCode(e.target.value)
        console.log(code)
    }

    return(
        <>
            <div className="questionPopUp">
                <h1 className='popUpTitle'>Edit Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputDivs">
                        <h3 className="Title">Title: </h3>
                        <input id="titleInput" className="inputs" defaultValue={Title} onChange={handleTitle} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Description: </h3>
                        <textarea id="descInput" className="inputs" defaultValue={Description} cols={40} rows={4} onChange={handleDesc} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Code Attempt (Optional): </h3>
                        <textarea id="descInput" className="inputs" defaultValue={Code} cols={40} rows={4} onChange={handleCode} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Select Tags: </h3>
                        <div className="selectTagDiv">
                            {tags.map((tag, index) => {
                                return(
                                    <button key={index} className="selectTags" onClick={(e) => addTag(e,tag.name)}>{tag.name}</button>
                                )
                            })}
                        </div>
                        <div id="selectedTags" className="inputs">
                            {qnTag.map((tag, index) => {
                                return(
                                    <button key={index} className="selectTags" onClick={(e) => removeTag(e,tag)}>{tag}</button>
                                )
                            })}
                        </div>
                    </div>
                    <button type='submit' className='post'>Update</button>
                </form>
            </div>
        </>
    )
}

export default PatchQn