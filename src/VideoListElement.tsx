import React from 'react';
import { Video } from './Video';

interface VideoListElementProps {
    video: Video,
    setCurrentVideo: React.Dispatch<React.SetStateAction<Video | undefined>>
}

function VideoListElement(props: VideoListElementProps) {
    const video = props.video;
    const setCurrentVideo = props.setCurrentVideo;

    return (
        <div className="flex flex-col shadow-lg border-slate-200 border-2 rounded p-4">
            <p className="font-medium text-xl">{ video.participants.join(' & ') }</p>
            <p className="text-lg mb-4">Season {video.season}, Episode {video.episode}</p>
            <div className="flex flex-wrap">
                {video.secretEatersTypes.map((tag: string) =>
                    <div className="h-6 flex items-center text-xs bg-sky-100 rounded text-sky-800 m-1 p-2" key={tag}>
                        {tag}
                    </div>
                )}
                {video.problemAreas.map((tag: string) =>
                    <div className="h-6 flex items-center text-xs bg-violet-100 rounded text-violet-800 m-1 p-2" key={tag}>
                        {tag}
                    </div>
                )}
                {video.tags.map((tag: string) =>
                    <div className="h-6 flex items-center text-xs bg-pink-100 rounded text-pink-800 m-1 p-2" key={tag}>
                        {tag}
                    </div>
                )}
            </div>
            <div className="flex grow"></div>
            <div className="self-end p-2 shadow-md border-2 rounded border-slate-500 my-4 cursor-pointer mt-8" onClick={() => setCurrentVideo(video)}>▶ Play Video</div>
        </div>
    );
}

export default VideoListElement;