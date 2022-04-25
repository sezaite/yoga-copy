import React from "react";

interface SectionHeaderProps {
    text: string;
    highlightedText?: string; 
    textClass?: string;
}

const SectionHeader = ({text, highlightedText, textClass}: SectionHeaderProps) => {
    return ( 
            <h2 className={`title-md section-title ${textClass}`}>
                {text}
                {highlightedText && <span className="title-md orange span-text"> {highlightedText} </span>}
            </h2>
            
     );
}
 
export default SectionHeader;