import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <h1>React player</h1>
      <ReactPlayer
        playsinline
        width="100%"
        height="100%"
        controls
        volume={0}
        muted={true}
        url="https://media-house.s3.amazonaws.com/sizmar-ai-generated-videos/acac352c-32e9-4d15-b3c0-087c6a72a2f8-c7d4afb3-37d7-4e19-afc1-985c9631c4db.mp4"
      />
      <h1>video player</h1>
      <video
        src="https://media-house.s3.amazonaws.com/sizmar-ai-generated-videos/acac352c-32e9-4d15-b3c0-087c6a72a2f8-c7d4afb3-37d7-4e19-afc1-985c9631c4db.mp4"
        controls
        id="video"
        width="100%"
        height="100%"
        preload="none"
        autoPlay={false}
        muted={true}
      ></video>
    </div>
  );
};
