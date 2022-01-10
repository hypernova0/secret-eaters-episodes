import React, { useState } from 'react';

import VideoListElement from './VideoListElement';
import Filters from './Filters';
import CurrentFilter from './CurrentFilter';
import SecretEatersPageDetails from './SecretEatersPageDetails';

import { Video, VideosJson } from './Video';

interface VideoListProps {
    videosJson: VideosJson,
    setCurrentVideo: React.Dispatch<React.SetStateAction<Video | undefined>>
}

function VideoList(props: VideoListProps) {
    const [currentFilter, setCurrentFilter] = useState('');

    const videos: Video[] = props.videosJson.videos;
    const setCurrentVideo = props.setCurrentVideo;

    return (
        <div className="my-8">
            <p className="text-center text-3xl font-bold">Secret Eaters</p>
            <SecretEatersPageDetails />
            
            <Filters 
                setFilter={setCurrentFilter} 
                currentFilter={currentFilter} 
                videos={videos}
            />
            {currentFilter !== '' &&
                <CurrentFilter 
                    currentFilter={currentFilter} 
                    setCurrentFilter={setCurrentFilter} 
                />
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                {videos
                .filter((video: Video) => {
                    if (currentFilter) {
                        return video.secretEatersTypes.indexOf(currentFilter) > -1
                                || video.problemAreas.indexOf(currentFilter) > -1
                                || video.tags.indexOf(currentFilter) > -1;
                    } else {
                        return true;
                    }
                })
                .map((video: Video) => 
                    <VideoListElement 
                        key={video.id} 
                        video={video} 
                        setCurrentVideo={setCurrentVideo}
                    />
                )}
            </div>
        </div>
    );
}

export default VideoList;