import React, { useMemo } from 'react';
import { filterBackgroundColor, allFilters } from './common/utils';

import { Filter } from './Filter';
import { Video } from './Video';

interface FiltersProps {
    currentFilter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    videos: Video[]
}

function Filters(props: FiltersProps) {
    const setFilter = props.setFilter;
    const currentFilter = props.currentFilter;
    const videos = props.videos;

    const filterCount: Record<string, number> = useMemo(() => {
        const tempFilterCount: Record<string, number> = {};

        allFilters.forEach((filterCategory: Filter) => {
            filterCategory.tags.forEach((filterName: string) => {
                tempFilterCount[filterName] = 0;

                videos.forEach((video: Video) => {
                    if ([...video.secretEatersTypes, 
                    ...video.problemAreas, 
                    ...video.tags].indexOf(filterName) > -1) {
                        tempFilterCount[filterName]++;
                    }
                });
            })
        });

        return tempFilterCount;
    }, []);

    function filterCountBackgroundColor(currentFilter: string, filterName: string) {
        if (currentFilter === filterName) {
            return 'bg-white font-medium';
        } else {
            return 'bg-slate-200';
        }
    }

    return (
        <div className="shadow-lg border-2 border-slate-200 rounded p-2">
            <div className="font-bold text-xl flex justify-center mb-4">Filters</div>
            <div className="flex flex-col lg:grid lg:grid-cols-4">
                {allFilters.map((filterObj: Filter) =>
                    <div className={'flex flex-col items-center' + (filterObj.filterCategoryName === 'Problem Areas' ? ' col-span-2' : '')} key={filterObj.filterCategoryName}>
                        <p className="font-medium text-lg underline underline-offset-4 mb-2">{ filterObj.filterCategoryName }</p>
                        <div className="flex flex-wrap p-4 pt-0 justify-center">
                            {filterObj.tags.map((filterName: string) =>
                                <p 
                                    key={filterName}
                                    className={`flex items-center cursor-pointer p-1 mx-2 rounded ${filterBackgroundColor(currentFilter, filterName)}`}
                                    onClick={() => setFilter(currentFilter !== filterName ? filterName : '')}
                                >
                                    {filterName}
                                    <span 
                                        className={ `text-xs p-1 px-3 ml-2 rounded-full ${filterCountBackgroundColor(currentFilter, filterName)}`}
                                    >
                                        { filterCount[filterName] }
                                    </span>
                                </p>
                            )}
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export default Filters;