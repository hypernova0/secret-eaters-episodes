import React from 'react';
import { Video, Archtype, NutritionAdvice, CaloricUnderestimate, Results } from './Video';
import VideoDetailsCaloricUndercount from './VideoDetailsCaloricUndercount';

interface VideoDetailsProps {
    currentVideo: Video
}

function VideoDetails(props: VideoDetailsProps) {
    const currentVideo = props.currentVideo;

    return (
        <div className="p-4 m-4 mb-0 border-2 border-slate-200 shadow-lg rounded">
            <div className="text-2xl text-center">Secret Eaters Season { currentVideo.season }, Episode { currentVideo.episode }</div>
            <div className="p-2 text-xl">
                Participants: <span className="font-medium">{ currentVideo.participants.join(' & ') }</span>
            </div>
            <div className="p-2 mb-2">
                <div className="text-lg font-bold mb-2">Caloric Undercounting</div>
                {currentVideo.averageCaloricUnderestimates.length > 0 &&
                   currentVideo.averageCaloricUnderestimates.map((underEstimate: CaloricUnderestimate) =>
                    <VideoDetailsCaloricUndercount key={underEstimate.name} caloricUnderestimate={underEstimate} />
                )}
            </div>
            <div className="p-2 mb-2">
                <div className="text-lg font-bold mb-2">Secret Eaters archetypes</div>
                {currentVideo.archtypes && currentVideo.archtypes.map((archtype: Archtype) => 
                    <div className="mb-2 pl-8" key={archtype.name}>
                        <div className="text-lg font-medium">{ archtype.name }</div>
                        <div className="mb-2"><span className="font-medium mr-1">Traits:</span>{ archtype.description }</div>
                        <div className="mb-2"><span className="font-medium mr-1">Suggestion:</span>{ archtype.advice }</div>
                    </div>
                )}
            </div>
            <div className="p-2 mb-2">
                <div className="text-lg font-bold mb-1">🔬 Research</div>
                {currentVideo.research &&
                    <div className="pl-8">
                        <div className="mb-2"><span className="font-medium mr-1">Question:</span>{ currentVideo.research.question }</div>
                        <div className="mb-2"><span className="font-medium mr-1">Observations:</span> { currentVideo.research.observations }</div>
                        <div><span className="font-medium mr-1">Suggestion:</span> { currentVideo.research.suggestions }</div>
                    </div>
                }
            </div>
            {currentVideo.additionalNutritionAdvice.length > 0 &&
                <div className="p-2 mb-2">
                    <div className="text-lg font-bold mb-1">Other nutritional advice</div>
                    {currentVideo.additionalNutritionAdvice.map((nutritionAdvice: NutritionAdvice) =>
                        <div className="mb-4 pl-8" key={nutritionAdvice.topic}>
                            <div className="font-medium">{ nutritionAdvice.topic }</div>
                            <div>{ nutritionAdvice.advice }</div>
                        </div>
                    )}
                </div>
            }
            <div className="p-2 mb-2">
                <div className="text-lg font-bold mb-1">Follow-up weight loss results</div>
                {currentVideo.tenWeekResults.length > 0 &&
                   currentVideo.tenWeekResults.map((results: Results) =>
                    <div className="pl-8 mb-2" key={results.name}>
                        🏅<span className="font-medium ml-1 mr-0.5">{ results.name }</span> lost <span>{ results.poundsLost }</span> pounds! 🎉
                    </div>
                )}
            </div>
        </div>
    )
}

export default VideoDetails;