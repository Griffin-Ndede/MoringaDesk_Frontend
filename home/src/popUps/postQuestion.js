import './popups.css'

function PostQn(){
    let tags = ["JavaScript", "Python", "CSS", "React", "Flask"]
    let selected = []

    const clicked = (e, tag) =>{
        e.preventDefault()
        addTag(tag)
    }

    function addTag(tag){
        if(selected.includes(tag) === false){
            selected.push(tag)
        }
    }

    return(
        <>
            <div id="questionPopUp">
                <h1>Ask a Question</h1>
                <form>
                    <div className="inputDivs">
                        <h3 id="Title">Title: </h3>
                        <input id="titleInput" className="inputs" placeHolder={"Enter a Title..."} />
                    </div>
                    <div className="inputDivs">
                        <h3 id="Title">Description: </h3>
                        <input id="descInput" className="inputs" placeHolder={"Enter a Description..."} />
                    </div>
                    <div className="inputDivs">
                        <h3 id="Title">Code Attempt (Optional): </h3>
                        <input id="descInput" className="inputs" placeHolder={"Enter Code..."} />
                    </div>
                    <div className="inputDivs">
                        <h3 id="Title">Select Tags: </h3>
                        <div className="selectTagDiv">
                            {tags.map((tag, index) => {
                                return(
                                    <button key={index} className="selectTags" onClick={clicked}>{tag}</button>
                                )
                            })}
                        </div>
                        <div id="selectedTags" className="inputs">
                        {selected.map((tag, index) => {
                                return(
                                    <button key={index} className="selectTags">{tag}</button>
                                )
                            })}
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PostQn