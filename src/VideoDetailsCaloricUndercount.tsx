import React from 'react';
import { CaloricUnderestimate } from './Video';

interface VideoDetailsCaloricUndercountProps {
    caloricUnderestimate: CaloricUnderestimate
}

function VideoDetailsCaloricUndercount(props: VideoDetailsCaloricUndercountProps) {
    const underEstimate = props.caloricUnderestimate;

    function determineUndercountHtml(caloricUndercount: CaloricUnderestimate): string {
        const caloricInfoText = `During surveillance, <span class="font-medium mr-1 text-lg">${caloricUndercount.name}</span>undercounted their average daily caloric intake by <span class="font-medium mr-1 text-lg">${caloricUndercount.calories} calories.</span>`;

        let concernsText = '';

        if (caloricUndercount.concerns) {
            concernsText = `<span class="mr-2 text-red-400 italic">There are some concerns that this participant may have altered their eating habits during the surveillance period</span>`
        }

        if (caloricUndercount.calories === -1) {
            return `❓ Unfortunately, the episode did not report how far off <span class="font-medium mr-0.5 text-lg">${caloricUndercount.name}'s</span> caloric intake estimate was compared to his or her actual intake.`;
        } else if (caloricUndercount.calories <= 250) {
            return `${concernsText}${caloricInfoText} ${caloricUndercount.name} did a great job of counting their calories for the week. Having an accurate idea of your caloric intake is essential to maintaining a healthy weight (or losing weight).`;
        } else if (caloricUndercount.calories <= 750) {
            return `${concernsText}${caloricInfoText} This amount of caloric undercounting can lead to a weight gain of up to <span class="font-semibold mr-0.5 text-lg">a pound every two weeks</span>.`;
        } else if (caloricUndercount.calories <= 1500) {
            return `${concernsText}${caloricInfoText} This amount of caloric undercounting can lead to a weight gain of up to a <span class="font-semibold mr-0.5 text-lg">pound per week</span>!`;
        } else {
            return `${concernsText}${caloricInfoText} This is a very significant disparity between the amount of calories they think they're consuming and what they're actually consuming. <span class="font-semibold mr-0.5 text-lg">Sustained, significant weight gain</span> and the related health issues are guaranteed without changing one's dietary habits.`
        }
    }

    return (
        <div className="pl-8 mb-4" key={underEstimate.name} 
            dangerouslySetInnerHTML={{ __html: determineUndercountHtml(underEstimate)}}>
        </div>
    );
}

export default VideoDetailsCaloricUndercount;