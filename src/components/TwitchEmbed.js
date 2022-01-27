import React from "react";

const TwitchEmbed = ({ iframeUrl }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={iframeUrl}
        title="Latest video from Twitch"
      ></iframe>
    </div>
  );
};

export default TwitchEmbed;
