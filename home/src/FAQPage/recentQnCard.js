import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../myStore";

function RecentCard({ id, username, title, tags, replyCount, date }){

    const dispatch = useDispatch();

    const sendData = () => {
        dispatch(getData(id));
    };

    return(
        <>
            <Link className="links" to={`/questions/${id}`} onClick={sendData}><div className="recentCard">
                <img className="userIcon" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
                <h3 className="userName">@{username}:</h3>
                <h2 className="recentCardTitle">{title}</h2>
                <div className="tagButtonDiv">
                    {tags.map((tag, index) => {
                        return(
                            <button key={index} className="tagButtons">{tag}</button>
                        )
                    })}
                </div>
                <p className="recentInfo">Replies: {replyCount} | Date Posted: {date}</p>
            </div></Link>
        </>
    )
}

export default RecentCard