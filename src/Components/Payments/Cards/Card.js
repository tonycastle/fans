import { Grid, Button } from "@material-ui/core";
import "../addCard.css";
import DayJS from "react-dayjs";

const Card = ({ brand, id, last4, created, exp_month, exp_year, onDelete }) => {
  exp_month < 10 && (exp_month = "0" + exp_month); //fix month formatting
  return (
    <div className="displayedCard">
      <Grid container direction={"row"}>
        <Grid item>
          <img src={`/cards/${brand}.png`} alt="" className="card" />
        </Grid>
        <Grid item>
          <p>Card: xxxx-xxxx-xxxx-{last4}</p>
          <p>
            Card Added: <DayJS format="DD-MM-YYYY">{created * 1000}</DayJS>
          </p>
          <p>Expires: {`${exp_month}-${exp_year}`}</p>
          <Button
            className="deleteCard"
            onClick={() => {
              onDelete(id);
            }}
          >
            delete
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
