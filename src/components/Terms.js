import guarantee from "../img/guarantee.svg"

const Terms = () => {
    return ( 
        <div className="terms d-flex flex-column gap-2">
            <p className="text-sm text-center">
            Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. To cancel your subscription, please contact us at least 24 hours before the end of the trial period.
            </p>
            <p className="text-sm text-center">
            By choosing a payment method you agree to the <a href="#">T&Cs</a> and <a href="#">Privacy Policy</a>.
            </p>
            <img src={guarantee} alt="safe checkout labels" className="terms-img" />
        </div>
     );
}
 
export default Terms;