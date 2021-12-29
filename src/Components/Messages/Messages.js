/* import { useFetchData } from "../../hooks/useFetchData";
import { useMemo } from "react";
import { useParams } from "react-router-dom"; */

const Messages = () => {
  /*   console.log("rendered");

  const { id } = useParams();
  const userId = useMemo(() => ({ id: id }), [id]);
  const [user, setUser, userError, isLoading] = useFetchData(
    "/api/users/getother",
    userId
  );
  console.log(user); */
  return (
    <div>
      <h2>Messages</h2>
    </div>
  );
};

export default Messages;
