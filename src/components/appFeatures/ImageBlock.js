import phone1 from "../../img/phone.png"
import phone2 from "../../img/phone2.png"
import SectionHeader from "../headers/SectionHeader";

const ImageBlock = () => {
    return ( 
        <>
        <SectionHeader text="Start your yoga journey now!"/>
        <div className="d-flex phone-images">
            <img src={phone1} alt="" />
            <img src={phone2} alt="" />
        </div>
        </>
     );
}
 
export default ImageBlock;