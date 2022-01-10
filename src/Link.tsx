import React from 'react';

interface LinkProps {
    url: string,
    children: React.ReactNode
}

function Link(props: LinkProps) {
    return (
        <a className="text-blue-600 font-semibold" href={props.url} target="_blank" rel="noreferrer">
            { props.children }<span className="ml-1 font-bold text-lg">↗</span>
        </a>
    )
}

export default Link;