


const DisplayMusic = (props) => {
    return ( 
        <div>
            {props.displaySongs.map((song) =>{
                return(
                    <div>
                        <p className="music-title">Music Title: {song.title}</p>
                        <div> 
                            <p className="music-info"> Artist: {song.artist}</p>
                            <p1>Album: {song.album}</p1>
                        </div>
                        <div className="music-details">
                            <p>Date Released: {song.release_date}</p>
                            <p1>Genre: {song.genre}</p1>

                        </div>

                    </div>
                )
            })}
        </div>
     );
}
 
export default DisplayMusic;