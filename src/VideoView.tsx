import React from 'react';

import YoutubeVideo from './YoutubeVideo';
import DailyMotionVideo from './DailyMotionVideo';
import VideoDetails from './VideoDetails';

import { Video } from './Video';
import BackToListButton from './BackToListButton';

interface VideoViewProps {
    currentVideo: Video,
    setCurrentVideo: React.Dispatch<React.SetStateAction<Video | undefined>>
}

function VideoView(props: VideoViewProps) {
    const currentVideo = props.currentVideo;
    const setCurrentVideo = props.setCurrentVideo;

    return (
        <div>
            <BackToListButton setCurrentVideo={setCurrentVideo} />
            
            {currentVideo && currentVideo.type === 'youtube' &&
                <div className="relative aspect-video overflow-hidden mx-4">
                    <YoutubeVideo url={currentVideo.url} />
                </div>
            }

            {currentVideo && currentVideo.type === 'dailymotion' &&
                <div className="relative aspect-video overflow-hidden mx-4">
                    <DailyMotionVideo url={currentVideo.url} />
                </div>
            }

            {currentVideo &&
                <VideoDetails currentVideo={currentVideo} />
            }

            <BackToListButton setCurrentVideo={setCurrentVideo} />
        </div>
    )
}

export default VideoView;