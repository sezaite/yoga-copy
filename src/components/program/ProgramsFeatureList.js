import ProgramFeature from "./ProgramFeature"
import exercise from "../../img/exercise.svg";
import diet from "../../img/diet.svg";
import bookcheck from "../../img/bookcheck.svg";
import icon from "../../img/icon.svg";
import shoe from "../../img/shoe.svg";
import plan from "../../img/plan.svg";
import smartwatch from "../../img/smartwatch.svg"


const ProgramsFeatureList = () => {
    const features = [ {img : plan, title: "A personalized yoga program", about: "Completely safe and focused on your key goals"},
     {img: exercise, title: "A personalized yoga program", about: "Completely safe and focused on your key goals"},
     {img: shoe, title: "A personalized yoga program", about: "Completely safe and focused on your key goals"},
     {img: diet, title: "A personalized yoga program", about: "Completely safe and focused on your key goals"},
     {img: icon, title: "A personalized yoga program", about: "Completely safe and focused on your key goals"},
     {img: smartwatch, title: "A personalized yoga program", about: "Completely safe and focused on your key goals"},
      {img: bookcheck, title: "A personalized yoga program", about: "Completely safe and focused on your key goals"},
       ];
    return ( 
    <div className="features-list">
   {features.map((feature, index) => (
                <ProgramFeature key={index} img={feature.img} title={feature.title} description={feature.about}/>
            ))
            }
    </div>
     );
}
 
export default ProgramsFeatureList;