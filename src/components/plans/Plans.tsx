import React from "react";
import PlanCard from "./PlanCard";
import OrangeBtn from "../buttons/OrangeBtn";
import Terms from "../Terms";
import SectionHeader from "../headers/SectionHeader";

interface NameProp {
    name: string
}

const Plans = ({name}: NameProp) => {

    const plans = [
        {duration: "6 months", label: "50% discount", price: "$6.99", oldPrice: "$9.99", billing: "every 7 months"},
        {duration: "6 months", label: false, price: "$6.99", oldPrice: "$9.99", billing: "every 4 months"},
        {duration: "6 months", label: false, price: "$6.99", oldPrice: false, billing: "Every month"}
    ]
    return ( 
        <>
            <SectionHeader textClass="mb-2" text="Choose your plan and get " highlightedText="7 days free trial"/>
            <div className="plans d-flex flex-column">
                    {plans.map((item, index) => (
                        <PlanCard name={name} key={index} id={index} price={item.price} duration={item.duration} oldPrice={ item.oldPrice } billing={item.billing} label={item.label}/>
                    ))
                    }
                <OrangeBtn btnClass="orange-btn full-elem my-1" text="Get your plan" />
                <Terms/>
            </div>
        </>
     );
}
 
export default Plans;