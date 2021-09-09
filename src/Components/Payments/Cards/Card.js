import moment from "moment";
import { Grid } from "@material-ui/core";
import "../addCard.css";

const Card = ({ brand, last4, id, created, exp_month, exp_year }) => {
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
