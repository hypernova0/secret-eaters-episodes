import React from 'react';

interface YoutubeVideoProps {
  url: string
}

function YoutubeVideo(props: YoutubeVideoProps) {
  return (
    <iframe className="aspect-video absolute overflow-hidden left-0 top-0" width="100%" height="100%" src={props.url + '?autoplay=1'} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
  );
}

export default YoutubeVideo;