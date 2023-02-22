import video from "../data/video.js";
import Video from "./Video.js";
import LikeButton from "./LikeButtons.js";
import DisllikeButton from "./DislikeButton.js";
import ShowComments from "./ShowComments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video} />
      <LikeButton  upvotes={video.upvotes}/>
      <DisllikeButton downvotes={video.downvotes}/>
      <ShowComments video={video} />
    </div>
  );
}

export default App;
