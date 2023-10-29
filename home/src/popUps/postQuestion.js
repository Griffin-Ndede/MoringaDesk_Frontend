import './popups.css'
import React from"react"
import { useState } from 'react'

function PostQn(){
    let tags = ["JavaScript", "Python", "CSS", "React", "Flask"]
    const [ selected, setSelected ] = useState([])

    function addTag(e, tag){
        e.preventDefault()
        if(selected.includes(tag) === false){
            setSelected([...selected, tag])
        }
    }

    function removeTag(e, tag){
        e.preventDefault()
        if(selected.includes(tag) === true){
            let array = [...selected]
            let index = selected.indexOf(tag)
            array.splice(index, 1)
            setSelected(array)
        }
    }

    return(
        <>
            <div className="questionPopUp">
                <h1 className='popUpTitle'>Ask a Question</h1>
                <form>
                    <div className="inputDivs">
                        <h3 className="Title">Title: </h3>
                        <input id="titleInput" className="inputs" placeHolder={"Enter a Title..."} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Description: </h3>
                        <input id="descInput" className="inputs" placeHolder={"Enter a Description..."} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Code Attempt (Optional): </h3>
                        <input id="descInput" className="inputs" placeHolder={"Enter Code..."} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Select Tags: </h3>
                        <div className="selectTagDiv">
                            {tags.map((tag, index) => {
                                return(
                                    <button key={index} className="selectTags" onClick={(e) => addTag(e,tag)}>{tag}</button>
                                )
                            })}
                        </div>
                        <div id="selectedTags" className="inputs">
                        {selected.map((tag, index) => {
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