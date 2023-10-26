import './tagsPage.css'

function TagsPage(){
    return (
        <>
        <div>
            <h1>Tags</h1>
        </div>
        <div>
            <input type="text" id="searchInput" placeholder="Filter by tag name"></input>
        </div>
        <div className='card-container'>
        </div>
        </>
      )
}

export default TagsPage