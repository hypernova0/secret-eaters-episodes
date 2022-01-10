import React from 'react';

import { Video } from './Video';

interface BackToListButtonProp {
    setCurrentVideo: React.Dispatch<React.SetStateAction<Video | undefined>>
}

function BackToListButton(props: BackToListButtonProp) {
    const setCurrentVideo = props.setCurrentVideo;

    return (
        <div className="flex items-center">
            <p 
                onClick={() => setCurrentVideo(undefined)}
                className="m-4 text-xl font-bold cursor-pointer rounded shadow-md border-2 border-slate-200 inline-block py-2 px-4 flex items-center"
            >
                <span className="text-2xl mr-2 text-blue-600 flex items-center">⬅</span>Episode List
            </p>
        </div>
    );
}

export default BackToListButton;