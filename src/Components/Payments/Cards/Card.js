import moment from "moment";
import { Grid, Button } from "@material-ui/core";
import "../addCard.css";
import http from "../../../http-common";

const Card = ({ brand, last4, id, created, exp_month, exp_year }) => {
  const deleteCard = async () => {
    try {
      let payload = { id };
      const response = await http.post("/api/payments/deletecard", payload);
      /*  response.data.success
        ? "do whatever we do if it worked"
        : setdeleteError(response.data.message); */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="displayedCard">
      <Grid container direction={"row"}>
        <Grid item>
          <img src={`/cards/${brand}.png`} alt="" className="card" />
        </Grid>
        <Grid item>
          <p>Card: xxxx-xxxx-xxxx-{last4}</p>
          <p>Card Added: {moment(created * 1000).format("DD-MM-YYYY")}</p>
          <p>Expires: {`${exp_month}-${exp_year}`}</p>
          <Button className="deleteCard" onClick={deleteCard}>
            delete
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
