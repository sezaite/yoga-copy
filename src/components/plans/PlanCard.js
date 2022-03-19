const PlanCard = ({ id, name, duration, label, price, oldPrice, billing }) => {
    return (
        <div className="custom-radio-wrap plan-card d-flex align-items-center justify-content-between">
                <input type="radio" name={"plan-" + name} id={"plan-" + id + "-" + name}></input>
                <label htmlFor={"plan-" + id + "-" + name} className="custom-radio-label d-flex justify-content-between align-items-center">
                <div className=" d-flex flex-column">
                    <div className="d-flex align-items-center">
                        <h4 className="title-sm">{duration}</h4>
                        {label && <div className="discount-label"> {label} </div>}
                    </div>
                    <div className="d-flex align-items-baseline price-block">
                        <h3 className="title-lg">{price}</h3>
                        <span className="text-sm"> / month</span>
                    </div>
                    <div className="d-flex align-items-baseline">
                        {oldPrice &&
                            <>
                                <p className="text-sm text-line-through">{oldPrice}</p>
                                <p className="text-sm orange">{price + " "}</p>
                                <p className="text-sm">{billing}</p>
                            </>
                        }
                        {!oldPrice &&
                            <p className="text-sm">{billing}</p>
                        }
                    </div>
                    </div>
                    <span className="checkmark"></span>
                </label>
            
        </div>
    );
}

export default PlanCard;