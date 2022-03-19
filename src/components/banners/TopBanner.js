import tag from "../../img/tag.svg"

const TopBanner = () => {
    return ( 
        
                    <div className="d-flex justify-content-center top-banner">
                        <img src={tag} alt="tag icon" />
                        <p>50% discount only valid for <span> 00:15:49</span></p>
                    </div>
             
     );
}
 
export default TopBanner;