import { CodeBlock } from "react-code-blocks";

function ResponseCard({ user, solution, code, votes }){
    return(
        <>
            <div className="responseDiv">
                <div className="response">
                    <img className="userIcon" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
                    <h3 className="questionUserName">@{user}</h3>
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
            </div>
        </>
    )
}

export default ResponseCard