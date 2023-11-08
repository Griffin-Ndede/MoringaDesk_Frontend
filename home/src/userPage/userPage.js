import { useState, useEffect } from "react";
import './userPage.css'

function UserPage(){
    const [saves, setSaves] = useState([]);
    const [responses, setResponses] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
          fetch(`/saves/${userId}`)
            .then((res) => res.json())
            .then((saves) => setSaves(saves));
        }
      }, [userId]);

    useEffect(() => {
        if (userId) {
            fetch(`/responses/${userId}`)
                .then((res) => res.json())
                .then((responses) => setResponses(responses));
        }
    }, [userId]);

    return(
        <>
            <div id='header'>
                <img src='./Default_pfp.png' alt='Default pfp' />
                <div>
                    <h1>Wayne Otido</h1>
                    <p>Member since 2022</p>
                </div>
            </div>
            <h2>My Questions</h2>
            <div className='questions'>
                <div>
                    <h3>Problem title</h3>
                    <button>tag 1</button>
                </div>
                <div>
                    <h3>Problem title</h3>
                    <button>tag 1</button>
                    <button>tag 2</button>
                </div>
                <div>
                    <h3>Problem title</h3>
                    <button>tag 1</button>
                    <button>tag 2</button>
                </div>
            </div>
            {/* <h2>My Responses</h2>
            <div className='questions'>
                <div>
                    <h3>Problem title</h3>
                    <button>tag 1</button>
                </div>
                <div>
                    <h3>Problem title</h3>
                    <button>tag 1</button>
                    <button>tag 2</button>
                </div>
                <div>
                   <h3>Problem title</h3>
                   <button>tag 1</button>
                   <button>tag 2</button>
                </div> */}
            {/* </div> */}
            <h2>My Responses</h2>
            <div className='questions'>
                {responses.map((response) => (
                    <div key={response.id}>
                        <h3>{response.suggestion}</h3>
                        <p>{response.code}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>Saves</h2>
                <div className="questions">
                    {saves && saves.map((save) => (
                    <div key={save.id}>
                <h3>{save.question.title}</h3>
                <button>{save.question.tag}</button>
            </div>
          ))}
        </div>
      </div>

        </>
    )
}

export default UserPage