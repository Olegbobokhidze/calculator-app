import { useState } from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  const [state, setState] = useState({
    errorfirst: "",
    errorsecond: "",
  });

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "100px",
        gap: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>First Error - {state.errorfirst}</h1>
      <h1>Second Error - {state.errorsecond}</h1>

      <ReactPlayer
        playsinline
        width="100%"
        height="100%"
        controls
        ignoresilentswitch="ignore"
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
        onError={(e) => setState({ ...state, errorfirst: JSON.stringify(e) })}
        onErrorCapture={(e) =>
          setState({ ...state, errorsecond: JSON.stringify(e) })
        }
        muted={true}
      />
    </div>
  );
};
