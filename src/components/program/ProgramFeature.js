const ProgramFeature = ({img, title, description}) => {
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