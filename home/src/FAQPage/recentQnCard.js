function RecentCard({ username, title, tags, replyCount, date }){
    return(
        <>
            <div className="recentCard">
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
            </div>
        </>
    )
}

export default RecentCard