import React from 'react';

interface DailyMotionProps {
    url: string
}

function DailyMotionVideo(props: DailyMotionProps) {
    return (
        <iframe className="aspect-video absolute overflow-hidden left-0 top-0" frameBorder="0" src={props.url} width="100%" height="100%" title="DailyMotion video player" allow="autoplay" allowFullScreen></iframe>
    );
}

export default DailyMotionVideo;