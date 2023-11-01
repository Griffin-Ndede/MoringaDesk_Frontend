import './questions.css'
import ResponseCard from './responseCard';
import PostResp from '../popUps/postResponse';
import { useState } from 'react';
import { CodeBlock } from "react-code-blocks";

function QuestionPage(){
    const [ resp, setResp ] = useState(false)

    function addResp(){
        setResp(!resp)
    }
    return(
        <>
            <div id="questionPage">
                <div className="questionDiv">
                    <div className="question">
                        <img className="userIcon" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
                        <h3 className="questionUserName">@George:</h3>
                        <h1 className="questionTitle">How to convert an array to a string in JavaScript?</h1>
                        <p className='questionDescription'>I am trying to take an array of N strings and convert it into one long string. How can i do this?</p>
                        <div className='questionCodeBlock'>
                            <CodeBlock
                                text={'let Array = ["My", "name", "is", "Sam"]; \nconsole.log(Array);'}
                                language='javascript'
                                showLineNumbers={false}
                            />
                        </div>
                    </div>
                </div>
                <h2 id="Solutions">Solutions: </h2>
                <ResponseCard user={"Wayne"} solution={"Use the .join array method with a space as a seperator."} code={'let Array = ["My", "name", "is", "Sam"]; \nlet Sentence = Array.join(" ");'} votes={4}/>
                <ResponseCard user={"Otido"} solution={"Use the .join array method with a space as a seperator."} code={'let Array = ["My", "name", "is", "Sam"]; \nlet Sentence = Array.join(" ");'} votes={1}/>
                <button className="addButtons1" onClick={addResp}> + </button>
                {resp ? <div className="popUpBackground"><button className='closePopUp' onClick={addResp} >Close</button><PostResp /></div>: <></>}

            </div>
        </>
    )
}

export default QuestionPage