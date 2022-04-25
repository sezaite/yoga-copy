import React from "react";

interface ProgramFeatureType {
    img: string;
    title: string;
    description: string;
}

const ProgramFeature = ({img, title, description}: ProgramFeatureType) => {
    return ( 
        <div className="program-feature">
            <img src={img} alt="feature icon" />
            <div className="feature-info">
                <h6 className="title-sm">{title}</h6>
                <p className="text-xs">{description}</p>
            </div>
        </div>
     );
}
 
export default ProgramFeature;