export interface VideosJson {
    videos: Video[]
}

export interface Video {
    id: number,
    season: number,
    episode: number,
    participants: string[],
    type: string,
    url: string,
    secretEatersTypes: string[],
    problemAreas: string[],
    tags: string[],
    archtypes: Archtype[],
    research: Research,
    additionalNutritionAdvice: NutritionAdvice[],
    averageCaloricUnderestimates: CaloricUnderestimate[],
    tenWeekResults: Results[]
}

interface Results {
    name: string,
    poundsLost: number
}

interface CaloricUnderestimate {
    name: string,
    calories: number,
    concerns?: boolean
}

interface Archtype {
    name: string,
    description: string,
    advice: string
}

interface Research {
    question: string,
    observations: string,
    suggestions: string
}

interface NutritionAdvice {
    topic: string,
    advice: string
}