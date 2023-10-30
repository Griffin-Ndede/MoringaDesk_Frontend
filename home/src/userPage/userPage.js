import './userPage.css'

function UserPage(){
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
            <h2>My Responses</h2>
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
        </>
    )
}

export default UserPage