import axios from "axios";

const SearchBar = (props) => {
    async function getArtist(){
        let response = await axios.get('http://127.0.0.1:8000/api/ML/')
        let userArtist = prompt('What artist did you want to search for: ').toLocaleLowerCase

        let musicResult = response.filter(function(song) {
            if (song.artist === userArtist) {
                return true;
            }
        })
        return musicResult
    }
    
    async function getAlbum(){
        let response = await axios.get('http://127.0.0.1:8000/api/ML/')
        let userAlbum = prompt('What album did you want to search for: ').toLocaleLowerCase

        let musicResult = response.filter(function(song) {
            if(song.album === userAlbum){
                return true;
            }
        })
        return musicResult
    }
    async function getTitle(){
        let response = await axios.get('http://127.0.0.1:8000/api/ML/')
        let userTitle = prompt('What Title did you want to search for: ').toLocaleLowerCase

        let musicResult = response.filter(function(song) {
            if(song.title === userTitle){
                return true;
            }
        })
        return musicResult
    }
    async function getGenre(){
        let response = await axios.get('http://127.0.0.1:8000/api/ML/')
        let userGenre = prompt('What type of genre did you want to search for: ').toLocaleLowerCase

        let musicResult = response.filter(function(song) {
            if(song.genre === userGenre){
                return true;
            }
        })
        return musicResult
    }
    async function getReleaseDate(){
        let response = await axios.get('http://127.0.0.1:8000/api/ML/')
        let userReleaseDate = prompt('What Release date did you want to search for: EX 2021-02-26 ').toLocaleLowerCase

        let musicResult = response.filter(function(song) {
            if(song.release_date === userReleaseDate){
                return true;
            }
        })
        return musicResult
    }

    

    return (
        <div className="search-by-song-wrap">
        <div className="header">
          <p>Search Song by:</p>
        </div>
        <div className="search-by-types">
          <div className="Search-by-title ">
            <button onClick={getTitle}>title</button>
          </div>
          <div className="Search-by-Artist">
            <button onClick={getArtist}>artist/band</button>
          </div>
          <div className="Search-by-Album">
            <button onClick={getAlbum}>album</button>
          </div>
          <div className="Search-by-ReleaseDate">
            <button onClick={getReleaseDate}>release date</button>
          </div>
          <div className="Search-by-genre">
            <button onClick={getGenre}>genre</button>
          </div>
        </div>
      </div>
    );
}
 
export default SearchBar;


