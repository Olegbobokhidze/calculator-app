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
        url="https://media-house.s3.amazonaws.com/sizmar-ai-generated-videos/acac352c-32e9-4d15-b3c0-087c6a72a2f8-c7d4afb3-37d7-4e19-afc1-985c9631c4db.mp4"
      />
      <h1>video player</h1>
      <video
        controls
        width="100%"
        height="100%"
        playsInline
        preload="auto"
        src="https://media-house.s3.amazonaws.com/sizmar-ai-generated-videos/acac352c-32e9-4d15-b3c0-087c6a72a2f8-c7d4afb3-37d7-4e19-afc1-985c9631c4db.mp4"
      />
    </div>
  );
};
