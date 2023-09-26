import BookmarkButton from "./BookmarkButton"
import LikeDislikeButton from "./LikeDislikeButton"

const Quail = ({ title, img }) => {
    return <div className = "quail-card"> 
        <h2>{title}</h2>
        <p>Quails are another domesticated birds kept often as pets or farmed for meat and eggs. Quail eggs are healthier than chicken eggs, but are only the size of 1/4 of a chicken egg.
        </p>
        <img src={img}></img>
        <LikeDislikeButton/>
        <BookmarkButton/>
        </div>
}

export default Quail