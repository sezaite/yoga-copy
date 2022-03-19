import { useState } from 'react';
import arrow from "../../img/md-icon.svg";

const DukAccordionQuestion = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <div className={`accordion-card ${isOpen? "open" : "collapsed"}`} onClick={()=>setIsOpen(!isOpen)}>
            <div className="d-flex justify-content-between accordion-header">
                <h3 className="title-sm">
                    {question}
                </h3>
                <img src={arrow} alt="arrow icon" />
            </div>
            <div className="accordion-body">
                <p className="text-sm">
                    {answer}
                </p>
            </div>
            
        </div>
     );
}
 
export default DukAccordionQuestion;