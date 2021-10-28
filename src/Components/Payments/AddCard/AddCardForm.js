import { useState, useEffect } from "react";
import { Grid, TextField, MenuItem } from "@material-ui/core";
import http from "../../../http-common";
import StripeInput from "../StripeInput";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import * as yup from "yup";

const AddCardForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    postcode: "",
    email: "",
    country: "",
    city: "",
    street: "",
    state: "",
    ccnumber: "",
    expiration: "",
    cvc: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    postcode: false,
    email: false,
    country: false,
    city: false,
    street: false,
    state: false,
    ccnumber: false,
    expiration: false,
    cvc: false,
  });
  const [createCardError, setCreateCardError] = useState(false); //if Stripe returns an error handle it here.
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
        setCreateCardError(true);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //update state variables as form values are changed
  const updateFormValues = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  let validationSchema = {
    email: yup.string().email().required(),
    country: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    street: yup.string().required(),
    name: yup.string().required(),
    password: yup.string().required(),
    postcode: yup.string().required(),
  };

  const validateFormField = (field) => (e) => {
    if (!validationSchema[field].isValidSync(e.target.value)) {
      setFormErrors({ ...formErrors, [field]: true });
    }
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

  const handleSstripeChange = (element) => (event) => {
    if (event.error) {
      setFormErrors({ ...formErrors, [element]: true });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={5}>
        <Grid item>
          <TextField
            select
            variant="outlined"
            label="Country"
            value={formValues.country}
            error={formErrors.country}
            onChange={updateFormValues("country")}
            onBlur={validateFormField("country")}
            onFocus={() => {
              setFormErrors({ ...formErrors, country: false });
            }}
            id="Country"
            fullWidth
          >
            <MenuItem key="1" value="1">
              item 1
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            select
            label="State/Province"
            value={formValues.state}
            error={formErrors.state}
            onChange={updateFormValues("state")}
            onBlur={validateFormField("state")}
            onFocus={() => {
              setFormErrors({ ...formErrors, state: false });
            }}
            id="State/Province"
            fullWidth
          >
            <MenuItem key="2" value="2">
              item 1
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            type="text"
            value={formValues.street}
            error={formErrors.street}
            onChange={updateFormValues("street")}
            onBlur={validateFormField("street")}
            onFocus={() => {
              setFormErrors({ ...formErrors, street: false });
            }}
            label="Street"
            id="Street"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            type="text"
            value={formValues.city}
            error={formErrors.city}
            onChange={updateFormValues("city")}
            onBlur={validateFormField("city")}
            onFocus={() => {
              setFormErrors({ ...formErrors, city: false });
            }}
            label="City"
            id="City"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            name="postcode"
            type="text"
            label="ZIP/Postal Code"
            value={formValues.postcode}
            error={formErrors.postcode}
            onChange={updateFormValues("postcode")}
            onBlur={validateFormField("postcode")}
            onFocus={() => {
              setFormErrors({ ...formErrors, postcode: false });
            }}
            id="ZIP/Postal Code"
            helperText="This field is required"
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
            value={formValues.email}
            error={formErrors.email}
            onFocus={() => {
              setFormErrors({ ...formErrors, email: false });
            }}
            id="Email"
            onChange={updateFormValues("email")}
            onBlur={validateFormField("email")}
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
            error={formErrors.name}
            onFocus={() => {
              setFormErrors({ ...formErrors, name: false });
            }}
            id="Name on card"
            onChange={updateFormValues("name")}
            onBlur={validateFormField("name")}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Credit Card Number"
            name="ccnumber"
            variant="outlined"
            id="Credit Card Number"
            error={formErrors.ccnumber}
            onChange={handleSstripeChange("ccnumber")}
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
            id="Expiration Date"
            error={formErrors.expiration}
            fullWidth
            onChange={handleSstripeChange("expiration")}
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
            fullWidth
            id="CVC"
            error={formErrors.cvc}
            onChange={handleSstripeChange("cvc")}
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
          <button
            data-testid="submit-addcard"
            disabled={!stripe || !clientSecret}
          >
            Save Card
          </button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddCardForm;
