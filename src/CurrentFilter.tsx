import React from 'react';
import { filterBackgroundColor } from './common/utils';

interface CurrentFilterProps {
    currentFilter: string,
    setCurrentFilter: React.Dispatch<React.SetStateAction<string>>
}

function CurrentFilter(props: CurrentFilterProps) {
    const currentFilter = props.currentFilter;
    const setCurrentFilter = props.setCurrentFilter;
    
    return (
        <div className="flex items-center text-xl p-4 border-2 rounded border-slate-200 mt-4 shadow-md">
            <span>Current Filter:</span>
            <span className={`text-center font-medium mx-4 p-2 rounded ${filterBackgroundColor(currentFilter, currentFilter)}`}>{ currentFilter }</span>
            <span className="text-2xl text-red-400 cursor-pointer" onClick={() => setCurrentFilter('')}>✖</span>
        </div>
    )
}

export default CurrentFilter;