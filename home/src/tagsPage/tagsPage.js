import './tagsPage.css';

function TagsPage() {
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', filterQuestions);
});

function filterQuestions(event) {
  const selectedCategory = event.currentTarget.dataset.category;
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    question.style.display = 'none';
  });

  const filteredQuestions = document.querySelectorAll(`.question[data-category="${selectedCategory}"]`);

  filteredQuestions.forEach(question => {
    question.style.display = 'block';
  });
}

  return (
    <>
    <div id="head">
      <h1>Tags</h1> <br></br>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
    </div>
    <div id='searchbar'>
        <input type="text" id="searchInput" placeholder="Filter by tag name"></input>
    </div>
    </div>
      <div className='card-container'>
        <div className='card'>
          <h3>Phase 0</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        </div>
        <div className='card'>
          <h3>Phase 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        </div>
        <div className='card'>
          <h3>Phase 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        </div>
        <div className='card'>
          <h3>Phase 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        </div>
        <div className='card'>
          <h3>Phase 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        </div>
        <div className='card'>
          <h3>Phase 5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        </div>
      </div>
      </>
  );
}

export default TagsPage;
