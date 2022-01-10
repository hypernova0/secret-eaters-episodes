import { Filter } from '../Filter';

export enum AppViews {
    videoList,
    videoView
}

export const secretEatersTypeFilters = ['Ignorant Ingester', 'Mindless Muncher', 'Furtive Feaster'];
export const problemAreasFilters = ['Alcohol', 'Restaurant Meals', 'Snacking', 'Hidden Calories', 'Distracted Eating', 'Liquid Calories', 'Fast Food / Takeout', 'Massive Meals', 'Sweet Tooth', 'Cheese', 'Roast Potatoes'];
export const tagsFilters = ['Female', 'Male', 'Couple', 'Gastric Band'];


export const allFilters: Filter[] = [
    {
        filterCategoryName: 'Secret Eater Type',
        tags: secretEatersTypeFilters
    }, 
    {
        filterCategoryName: 'Problem Areas',
        tags: problemAreasFilters
    }, 
    {
        filterCategoryName: 'Other Filters',
        tags: tagsFilters
    }
];

export const filterBackgroundColor = (currentFilter: string, filterName: string) => {
    if (currentFilter === filterName) {
        if (secretEatersTypeFilters.indexOf(filterName) > -1) {
            return 'bg-sky-100 text-sky-800';
        } else if (problemAreasFilters.indexOf(filterName) > -1) {
            return 'bg-violet-100 text-violet-800';
        } else if (tagsFilters.indexOf(filterName) > -1) {
            return 'bg-pink-100 text-pink-800';
        }
    }

    return '';
}