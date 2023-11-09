import './filteredTags.css'
import './tagsPage.css'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../myStore";

function FilteredTag({ allTags }){

    const dispatch = useDispatch();

    const sendData = (id) => {
        dispatch(getData(id));
    };

    const tagId = useSelector((state) => state.value1);
    // const [searchTerm, setSearchTerm] = useState('');

    // const handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    //   };

    // const filteredTags = allTags.filter((tag) =>
    //     tag.questions?.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return(
    <>
    <div id="head">
        <h1>Tags</h1> <br></br>
        <div id='searchbar'>
            <input type="text" id="searchInput" placeholder="Filter by tag name" /*value={searchTerm} onChange={handleSearch}*/></input>
        </div>
    </div>
    <div id="filteredQns">
        <h2 id="Questions">{allTags[tagId-1]?.name} Questions</h2>
        {allTags[tagId-1]?.questions?.map(question => (
            <Link className="links" to={`https://moringa-yjml.onrender.com/questions/${question.id}`} onClick={() => sendData(question.id)}><div className="recentCard1">
            <img className="userIcon1" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
            <h3 className="userName1">@{question.user.username}:</h3>
            <h2 className="recentCardTitle1">{question.title}</h2>
            <div className="tagButtonDiv1">
                {question.tags?.map((tag, index) => {
                    return(
                        <button key={index} className="tagButtons1">{tag.name}</button>
                    )
                })}
            </div>
            <p className="recentInfo1">Replies: {question.responses?.length} | Date Posted: {question.created_at}</p>
        </div></Link>
        ))}
    </div>
    </>
    )

}

export default FilteredTag