import LikeDislikeButton from "./LikeDislikeButton"
import BookmarkButton from "./BookmarkButton"

const ProjectInfo = ({ title, img }) => {
    return <div className = "project-card"> 
        <h2>{title}</h2>
        <p>Chickens can be more colors than you think they can be. There is a breed of chickens that is fully black, including it's wattle, tongue, organs and feet. The only thing that isn't black is it's eggs, search up Ayam Cemani chickens.
        </p>
        <img src={img}></img>
        <LikeDislikeButton/>
        <BookmarkButton/>
        </div>
        
}

export default ProjectInfo