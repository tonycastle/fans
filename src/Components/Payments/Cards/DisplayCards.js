import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CreditCardIcon } from "@material-ui/icons/CreditCard";
import "../addCard.css";
import Card from "./Card";
import { useFetchData } from "../../../hooks/useFetchData";
import { CircularProgress } from "@material-ui/core";
import { useMemo, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth-context";
import axios from "axios";
import ErrorDialog from "../../Utilities/ErrorDialog";

//TODO: pass user details so we get thereal card details for the logged in user
const DisplayCards = () => {
  const loggedInUser = useContext(AuthContext).User._id;
  const id = useMemo(() => ({ id: loggedInUser }), [loggedInUser]);
  const [deleteCardError, setDeleteCardError] = useState(false);
  const [cards, setCards, error, isLoading] = useFetchData(
    "/api/payments/listcards",
    id
  );
  error && console.log(error);
  console.log(cards);

  const deleteCard = async (cardId) => {
    try {
      const res = await axios.post("/api/payments/deletecard", { id: cardId });
      setCards(cards.filter((card) => card.id !== cardId));
      console.log(res);
    } catch (err) {
      setDeleteCardError(true);
    }
  };

  return (
    <div className="cardContent">
      <h2>CARDS</h2>
      {isLoading ? (
        <CircularProgress />
      ) : error ? (
        <ErrorDialog
          msg={`Hmmm, that's not supposed to happen. Could not find card list`}
        />
      ) : cards.length > 0 ? (
        cards.map((card) => (
          <Card {...card} onDelete={deleteCard} key={card.id} />
        ))
      ) : (
        <p>
          No cards have been created yet. Add a new card so you can subscribe to
          creator content.
        </p>
      )}
      {deleteCardError && (
        <ErrorDialog
          msg="Could not remove card at this time."
          closeAction={() => {
            setDeleteCardError(false);
          }}
        />
      )}
      <Button
        component={Link}
        to="/addcard"
        variant="contained"
        className="addCardButton"
        startIcon={CreditCardIcon}
      >
        Add new Card
      </Button>
    </div>
  );
};

export default DisplayCards;
