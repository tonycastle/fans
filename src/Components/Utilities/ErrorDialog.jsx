import { Button } from "@material-ui/core";

//A component to display error messages - gives us easy consistent styling and behaviour in 1 place.
// if clodse action is passed it acts like a dialog otherwise just an error message
const ErrorDialog = ({ msg, closeAction = null }) => {
  return (
    <div className="errorDialogContainer">
      {closeAction && <Button onClick={closeAction}>close</Button>}
      <p>{msg}</p>
    </div>
  );
};

export default ErrorDialog;
