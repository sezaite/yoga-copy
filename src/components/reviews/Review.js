import star from "../../img/star.svg"

const Review = ({stars, review, name, age, location, img}) => {
    let starsHTML = [];
    for (let i = 0; i < stars; i++) {
        starsHTML.push(<img src={star} key={i} alt="star icon" className="star"/>);
    }
    return ( 
        <div className="col-md-4 same-height-col" >
            <div className="review-card d-flex flex-column">
                <div className="d-flex align-items-baseline">
                    <h6 className="title-xs">{name}, </h6>
                    <h6 className="title-xs"> {age}</h6>
                </div>
                <p className="text-xs">{location}</p>
                <div className="d-flex stars">
                    {starsHTML}
                </div>
                <img src={img} alt="curstomer phto" className="customer-img" />
                <p className="text">{review}</p>
            </div>
        </div>
     );
}
 
export default Review;