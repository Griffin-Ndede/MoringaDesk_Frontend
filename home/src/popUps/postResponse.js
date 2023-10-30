import './popups.css'
import React from"react"

function PostResp(){
    
    return(
        <>
            <div className="questionPopUp">
                <h1 className='popUpTitle'>Post a Response</h1>
                <form>
                    <div className="inputDivs">
                        <h3 className="Title">Suggestion: </h3>
                        <input id="descInput" className="inputs" placeHolder={"Enter a Description..."} />
                    </div>
                    <div className="inputDivs">
                        <h3 className="Title">Solution Code (Optional): </h3>
                        <input id="descInput" className="inputs" placeHolder={"Enter Code..."} />
                    </div>
                    <button type='submit' className='post'>Post</button>
                </form>
            </div>
        </>
    )
}

export default PostResp