import React, { createRef, useEffect, useState } from "react";
import Moshed from "../../video/moshed.mp4";

type Props = {
  className?: string;
};

const VideoBackground = ({ className }: Props) => {
  const video = createRef<HTMLVideoElement>();
  const [replaceVideoWithPoster, setReplaceVideoWithPoster] = useState(false);

  useEffect(() => {
    // fix for iOS 'low power mode', if error playing
    // video then use a background image instead
    if (video.current) {
      video.current
        .play()
        .then(() => {})
        .catch((error) => {
          setReplaceVideoWithPoster(true);
        });
    }
  }, [video, replaceVideoWithPoster]);

  return (
    <div className={`absolute inset-px ${className}`}>
      {replaceVideoWithPoster ? (
        <img
          src="/poster-image.jpg"
          alt=""
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
      ) : (
        <video
          ref={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-0 top-0 w-full h-full object-cover"
          poster="/poster-image.jpg"
        >
          <source src={Moshed} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoBackground;
