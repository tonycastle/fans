import "./addCard.css";
import visa from "../../images/cards/visa.png";
import mastercard from "../../images/cards/mastercard.png";
import jcb from "../../images/cards/jcb.png";
import maestro from "../../images/cards/maestro.png";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AddCardForm from "./AddCardForm.js";

const stripePromise = loadStripe(
  "pk_test_51JWsLSBhgw4Dhe1c4LAkeMkEY5Oww2PwvJ6VSsK2hv2Mv4Uz8hws4oF4fLgNYQqGYW5wkf3bifVVYPfWwD9q2s4u00BpT1znXN"
);

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
