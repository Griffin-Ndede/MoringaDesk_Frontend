import './popups.css'
import React from"react"
import { useState } from 'react'
import { useSelector } from "react-redux";

function PostQn({ newId, allTags }){
    const [ title, setTitle ] = useState(' ')
    const [ description , setDescription ] = useState('')
    const [ code , setCode ] = useState('')
    const [ qnTag , setQnTag ] = useState([])

    const userId = useSelector((state) => state.value2.id);

    function handleSubmit(e){
        if(title !== ' ' && description !== ''){
            fetch('https://moringa-yjml.onrender.com/questions', {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    code: code,
                    user_id: userId,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                .then(response => {
                    response.json()
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                  })
                .then(
                    qnTag.forEach(tag => {
                        let tagId = allTags.filter(tags => tags.name === tag)[0].id
                        fetch('https://moringa-yjml.onrender.com/question_tags', {
                            method: "POST",
                            body: JSON.stringify({
                                tag_id: tagId,
                                question_id: newId,
                              }),
                              headers: {
                                "Content-type": "application/json; charset=UTF-8",
                              },
                            })
                            .then(response => {
                                response.json()
                            })
                            .catch((error) => {
                                console.error('Error fetching data:', error);
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
            console.log(qnTag)
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
                <h1 className='popUpTitle'>Ask a Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputDivs">
                        <h3 className="Title">Title: </h3>
                        <input id="titleInput" className="inputs" placeholder={"Enter a Title..."} onChange={handleTitle} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Description: </h3>
                        <textarea id="descInput" className="inputs" placeholder={"Enter a Description..."}  cols={40} rows={4} onChange={handleDesc} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Code Attempt (Optional): </h3>
                        <textarea id="descInput" className="inputs" placeholder={"Enter Code..."} cols={40} rows={4} onChange={handleCode} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Select Tags: </h3>
                        <div className="selectTagDiv">
                            {allTags?.map((tag, index) => {
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
                    <button type='submit' className='post'>Post</button>
                </form>
            </div>
        </>
    )
}

export default PostQn