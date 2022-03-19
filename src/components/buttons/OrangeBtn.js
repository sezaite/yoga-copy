const OrangeBtn = ({text, btnClass}) => {
    return ( 
        <button className={`button ${btnClass}`}>
            {text}
        </button>
     );
}
 
export default OrangeBtn;