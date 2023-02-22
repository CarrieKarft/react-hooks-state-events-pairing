import React, {useState} from "react";

function DisllikeButton({ downvotes }) {
    const [downCount, setDownCount] = useState(downvotes)

    return (
        <button onClick={() => setDownCount(downCount + 1)}>{downCount} 👎</button>
    )
}

export default DisllikeButton;