import React, { useState, useEffect } from 'react';
import './tagsPage.css';
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getData1 } from "../myStore";

function TagsPage() {
const [tags, setTags] = useState([]);
const [selectedTag, setSelectedTag] = useState(null);
const [questions, setQuestions] = useState([]);
const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('/tags')
      .then((response) => response.json())
      .then((data) => {
        setTags(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleClick = (tagId) => {
    fetch(`/tags/${tagId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Failed to fetch tag with ID: ${tagId}`);
        }
      })
      .then((data) => {
        setSelectedTag(data);
        setQuestions(data.questions);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (event) => {
            setSearchTerm(event.target.value);
          };

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch();
  const sendData = (id) => {
    dispatch(getData1(id));
  };

  return (
    <>
    <div id="head">
      <h1>Tags</h1> <br></br>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
    </div>
    <div id='searchbar'>
        <input type="text" id="searchInput" placeholder="Filter by tag name" value={searchTerm} onChange={handleSearch}></input>
    </div>
    </div>
      <div className='card-container'>
        {filteredTags.map((tag, index) => (
          <Link className="links" to={`/tags/${tag.id}`} onClick={()=> sendData(tag.id)}><div className='card' key={index} /* onClick={() => handleClick(tag.id)}*/>
            <h3>{tag.name}</h3>
            <p>
              {tag.description}
            </p>
          </div></Link>
        ))}
      </div>
      {/* {selectedTag && (
        <div>
          <h3>Questions for {selectedTag.name}</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question.description}</li>
            ))}
          </ul>
        </div>
      )} */}

      </>
  );
}

export default TagsPage;
