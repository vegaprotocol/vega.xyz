import React from "react";
import styled from "styled-components";

const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const TwitchEmbed = ({ iframeUrl }) => {
  return (
    <Video>
      <iframe src={iframeUrl} title="Latest video from Twitch"></iframe>
    </Video>
  );
};

export default TwitchEmbed;
