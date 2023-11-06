import React, { useState, useEffect } from 'react';
import './tagsPage.css';

function TagsPage() {
const [tags, setTags] = useState([]);
const [selectedTag, setSelectedTag] = useState(null);

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

  const handleClick = (tag) => {
    const selectedTagObject = tags.find((t) => t.name === tag);
    setSelectedTag(selectedTagObject);
  };

const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
            setSearchTerm(event.target.value);
          };

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className='card' key={index} onClick={() => handleClick(tag.name)}>
            <h3>{tag.name}</h3>
            <p>
              {tag.description}
            </p>
          </div>
        ))}
      </div>
      {selectedTag && (
        <div>
          <h3>Questions for {selectedTag.name}</h3>
          <ul>
            {selectedTag.questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
      </>
  );
}

export default TagsPage;
