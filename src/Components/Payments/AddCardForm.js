import { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import http from "../../http-common";
import StripeInput from "./StripeInput";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const AddCardForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    postcode: "",
    email: "",
  });
  const stripe = useStripe();
  const elements = useElements();

  //get the client secret from the backend - needed when we save the card.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http.get("/api/payments/addcard");
        setClientSecret(res.data.client_secret);
        console.log(`client secret: ${res.data.client_secret}`);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //update state variables as form values are changed
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = {};
    newValue[name] = value;
    setFormValues((prev) => ({ ...prev, ...newValue }));
  };

  //submit the for mand register the card with Stripe.
  //TODO: disable the save button so that the form can not be resubmitted until Stripe has responded.
  const handleSubmit = async (event) => {
    event.preventDefault();

    //exit if stripe not loaded
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: formValues.name,
          address: {
            postal_code: formValues.postcode,
          },
          email: formValues.email,
        },
      },
    });

    if (result.error) {
      console.log(result.error);
    } else {
      console.log(result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={5}>
        {/*  <Grid item>
          <TextField
            select
            variant="outlined"
            label="Country"
            name=""
            id=""
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            select
            label="State/Province"
            fullWidth
          />
        </Grid> */}
        <Grid item>
          <TextField variant="outlined" type="text" label="Street" fullWidth />
        </Grid>
        <Grid item>
          <TextField variant="outlined" type="text" label="City" fullWidth />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            name="postcode"
            type="text"
            label="ZIP/Postal Code"
            value={formValues.postcode}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item>
          <h2>Card Details</h2>
        </Grid>
        <Grid item>
          <TextField
            type="text"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            value={formValues.email}
          />
        </Grid>
        <Grid item>
          <TextField
            type="text"
            name="name"
            label="Name on card"
            variant="outlined"
            fullWidth
            value={formValues.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Credit Card Number"
            name="ccnumber"
            variant="outlined"
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardNumberElement,
              },
            }}
          />
        </Grid>
        {/* </Grid> */}
        {/*  <Grid container direction={"row"}> */}
        <Grid item>
          <TextField
            label="Expiration Date"
            name="ccexp"
            variant="outlined"
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement,
              },
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="CVC"
            name="ccexp"
            variant="outlined"
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement,
              },
            }}
          />
        </Grid>
        <Grid item>
          <button disabled={!stripe || !clientSecret}>Save Card</button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddCardForm;
