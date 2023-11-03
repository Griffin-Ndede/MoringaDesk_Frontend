import React, { useState } from 'react';
import './tagsPage.css';

function TagsPage() {
// const cards = document.querySelectorAll('.card');

const [tags, setTags] = useState([
  { name: 'Phase 0', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' },
  { name: 'Phase 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' },
  { name: 'Phase 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' },
  { name: 'Phase 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' },
  { name: 'Phase 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' },
  { name: 'Phase 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' },
]);

const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
            setSearchTerm(event.target.value);
          };

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

// cards.forEach(card => {
//   card.addEventListener('click', filterQuestions);
// });

// function filterQuestions(event) {
//   const selectedCategory = event.currentTarget.dataset.category;
//   const questions = document.querySelectorAll('.question');

//   questions.forEach(question => {
//     question.style.display = 'none';
//   });

//   const filteredQuestions = document.querySelectorAll(`.question[data-category="${selectedCategory}"]`);

//   filteredQuestions.forEach(question => {
//     question.style.display = 'block';
//   });
// }

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
          <div className='card' key={index}>
            <h3>{tag.name}</h3>
            <p>
              {tag.description}
            </p>
          </div>
        ))}
      </div>
      </>
  );
}

export default TagsPage;
