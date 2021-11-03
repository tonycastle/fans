import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CreditCardIcon } from "@material-ui/icons/CreditCard";
import "../addCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const DisplayCards = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  //get list of cards from the backend
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get("/api/payments/listcards");
        setCards(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="cardContent">
      <h2>CARDS</h2>
      {cards.length > 0 ? (
        cards.map((card) => (
          <Card
            brand={card.card.brand}
            last4={card.card.last4}
            key={card.id}
            id={card.id}
            created={card.created}
            exp_month={card.card.exp_month}
            exp_year={card.card.exp_year}
            //onComplete={onUploadComplete}
            //onDelete={deleteUploadedFile}
          />
        ))
      ) : (
        <p>
          No cards have been created yet. Add a new card so you can subscribe to
          creator content.
        </p>
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
