import React, { useState } from 'react';

import Link from './Link';

function SecretEatersPageDetails() {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <div className="px-8 my-4">
            <p className="pb-4">
                <span><Link url='https://www.imdb.com/title/tt2909322/'>Secret Eaters</Link> is a British reality show that ran for three seasons on the UK television station <Link url='https://www.channel4.com/'>Channel 4</Link>.</span>
                {!showFullDescription &&
                    <span
                        className="ml-2 underline font-medium cursor-pointer"
                        onClick={() => setShowFullDescription(true)}>Show full description ⤵  
                    </span>
                }
                {showFullDescription &&
                    <span className="ml-1">Hosted by <Link url='https://en.wikipedia.org/wiki/Anna_Richardson'>Anna Richardson</Link>, Secret Eaters focused on the eating habits of ordinary people struggling with their weight. Using in-home surveillance cameras, around-the-clock monitoring by private detectives, and the help of friends, family, and workplace colleagues, the show highlighted the many ways regular people can struggle with poor eating habits and the associated weight gain. In addition to an in-depth look at the participants' eating habits, each episode contains an informal research experiment conducted by psychologist <Link url='https://drdavidlewis.com/'>Dr. David Lewis</Link> on common dietary pitfalls. Alongside Anna and David, dietician and author <Link url='https://twitter.com/dietlg'>Lynne Garton</Link> provides copious amounts of nutritional information and healthy eating suggestions.</span>
                }
            </p>
            {showFullDescription &&
                <div>
                    <p className="pb-4">Despite sounding like yet another weight loss reality show exploiting its participants for views, Secret Eaters does an amazing job of pulling back the curtain on poor eating habits and a lack of nutritional knowledge common to many people. The show does not promote any fad diets or weight loss products. Rather, the show provides endless amounts of research-backed information to both viewers and the show's participants. Indeed, at the end of each episode there is a followup where many of the participants have lost a significant amount of weight in the months following their surveillance period.</p>
                    <p className="pb-4">While the title of the show evokes images of hiding one's eating from others, the most common type of secret eating shown throughout the show is simply not knowing how many calories one is consuming, nor knowing how many calories one should consume each day to maintain a healthy weight. Every participant on the show is required to fill out a food log for the weeklong surveillance period, and nearly every single one does not fill out the log with accurate information. Confronted with undercover footage of every single calorie taken in during that week, many participants face a brutal realization that most of their secret eating is not eating hidden away from others, but from themselves.</p>
                    <p className="pb-4">As someone that has struggled with problematic eating habits and unwanted weight gain, I found Secret Eaters to be a compelling portrayal of modern day eating issues, a bastion of helpful, research-based nutritional advice for those issues, and an important reflection on my own eating. The goal of this page is to compile all Secret Eaters episodes in one place and help others access this great resource.
                    <span
                        className="ml-2 underline font-medium cursor-pointer"
                        onClick={() => setShowFullDescription(false)}>Hide full description ⤴  
                    </span></p>
                </div>
            }
        </div>
    )
}

export default SecretEatersPageDetails;