import { useState } from 'react';
import React from 'react';
import arrow from "../../img/md-icon.svg";

interface DukAccordionQuestionProps {
    question: string;
    answer: string;
} 

//QUESTION: img import doesn't work
//QUESTION: React.FC issue (OrangeBtn components vs this one)

const DukAccordionQuestion = ({question, answer}: DukAccordionQuestionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
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