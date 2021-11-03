import "../addCard.css";
import visa from "../../../images/cards/visa.png";
import mastercard from "../../../images/cards/mastercard.png";
import jcb from "../../../images/cards/jcb.png";
import maestro from "../../../images/cards/maestro.png";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AddCardForm from "./AddCardForm.js";

const stripePromise = loadStripe(process.env.STRIPE_KEY);
//TODO - move the get client secret effect from the form to here and then only display the form once we have a secret.
//means the form cannot be submitted without a secret and the user won't waste time filling in a form if Stripe
//is unavailable.
const AddCard = () => {
  return (
    <div className="addCardContent">
      <h1>Add Card</h1>
      <Elements stripe={stripePromise}>
        <AddCardForm />
      </Elements>
      <div className="cards">
        <img src={visa} alt="" />
        <img src={mastercard} alt="" />
        <img src={maestro} alt="" />
        <img src={jcb} alt="" />
      </div>
    </div>
  );
};

export default AddCard;
