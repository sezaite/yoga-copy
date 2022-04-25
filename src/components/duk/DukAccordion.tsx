import React from "react";
import DukAccordionQuestion from "./DukAccordionQuestion";
import SectionHeader from "../headers/SectionHeader";
import OrangeBtn from "../buttons/OrangeBtn";

const DukAccordion: React.FC = () => {
    const QUESTIONS = [{question: "What happens after I order?", answer: "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "},
    {question: "What happens after I order?", answer: "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "},
    {question: "What happens after I order?", answer: "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "},
    {question: "What happens after I order?", answer: "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "}];
    return ( 
        <div className="container-md faq-section">
            <div className="row mb-6">
            <div className="d-flex flex-column gap-1">
<SectionHeader text="Frequently Asked Questions"/>
                {
                QUESTIONS.map((item, index)=> (
                    <DukAccordionQuestion key={index} question={item.question} answer={item.answer}/>
                    ))
                }
                </div>
            </div>
            <OrangeBtn btnClass="orange-btn mobile-only full-elem mb-6" text="Get my plan"/>
        </div>
      
     );
}
 
export default DukAccordion;