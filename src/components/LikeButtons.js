import React, {useState} from "react";

function LikeButton({ upvotes }) {
    const [upCount, setUpCount] = useState(upvotes);
   

    return (
        <button onClick={() => setUpCount(upCount + 1)}>{upCount} 👍</button>
    )
}

export default LikeButton;