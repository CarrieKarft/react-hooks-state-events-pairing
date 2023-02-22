import React from "react";

function Video({ video }) {
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
        </div>
    )
}

export default Video;