import checkmark from "../../img/Vector.svg"

const AppFeature = ({feature}) => {
    return ( 
        <div className="d-flex app-feature">
            <img src={checkmark} alt="checkmark icon" />
            <p className="text-sm">{feature}</p>
        </div>
     );
}
 
export default AppFeature;