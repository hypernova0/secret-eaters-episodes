import React, { useState, useEffect } from 'react';

import VideoList from './VideoList';
import VideoView from './VideoView';

import videosJson from './data/videos.json';

import { Video, VideosJson } from './Video';
import { AppViews } from './common/utils';

const videosObj: VideosJson = videosJson;

function App() {
  const [currentView, setCurrentView] = useState(AppViews.videoList);
  const [currentVideo, setCurrentVideo] = useState<Video>();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (currentVideo !== undefined) {
      setCurrentView(AppViews.videoView);
    } else {
      setCurrentView(AppViews.videoList);
    }
  }, [currentVideo]);

  return (
    <div className="mx-4 lg:container lg:mx-auto">
      {currentView === AppViews.videoList &&
        <VideoList 
          videosJson={videosObj}
          setCurrentVideo={setCurrentVideo}
        />
      }
      {currentView === AppViews.videoView && currentVideo &&
        <VideoView 
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
        />
      }
    </div>
  );
}

export default App;
