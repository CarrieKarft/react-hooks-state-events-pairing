import React from "react";

function CommentsList({ user, comment}) {
    return (
        <div>
            <h4>{user}</h4>
            <p>{comment}</p>
        </div>
    )
}

export  default CommentsList;