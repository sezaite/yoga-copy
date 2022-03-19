import AppFeature from "./AppFeature";
import SectionHeader from "../headers/SectionHeader";

const AppFeaturesList = () => {
    const features = ["Each program adapts to your age or fitness level", "Mindful way to exercise and get real results", "Each program adapts to your age or fitness level", "Mindful way to exercise and get real results", "Each program adapts to your age or fitness level", "Mindful way to exercise and get real results"];
    return ( 
        <>
        <SectionHeader text="Is Positive Yoga right for me?"/>
        <div className="d-flex flex-column">
            {
            features.map((item, index)=>(
                <AppFeature key={index} feature={item}/>
                ))
            }
        </div>
        </>
     );
}
 
export default AppFeaturesList;