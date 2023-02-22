import React, {useState} from "react";
import CommentsList from "./CommentsList";


// When the user clicks the "Hide Comments" button, the comments should be removed from the page, and the button text should change to "Show Comments". When the button is clicked again, it should toggle back to showing the comments.
function ShowComments({ video }) {
    const [hideComments, setHideComments] = useState(false)
    const mapingComments = video.comments.map(commenti => {
        return <CommentsList key={commenti.id} user={commenti.user} comment={commenti.comment}/>
    })

    function clickHandler(e) {
        setHideComments(!hideComments)
    }
    return (
        <div>
            {/* this will change to a ternary operateror based off click event*/}
            <button onClick={clickHandler}>{hideComments ? "Show Comments" : "Hide Comments"}</button>
            {hideComments ? 
            null : 
            <div> 
                <h2>{mapingComments.length} Comments</h2> 
                {mapingComments} 
            </div>}
        </div>
    )
}

export default ShowComments;