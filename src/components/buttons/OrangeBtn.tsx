import React from 'react';

interface BtnProps {
    text: string; 
    btnClass: string;
}
//  QUESTION: kodel anas neveikia?
const OrangeBtn: React.FC<BtnProps> = ({text, btnClass}) => {
    // const OrangeBtn: React.FC<BtnProps> = ({text, btnClass}: BtnProps) => {
    return ( 
        <button className={`button ${btnClass}`}>
            {text}
        </button>
     );
}
 
export default OrangeBtn;