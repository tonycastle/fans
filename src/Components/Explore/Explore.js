import axios from "axios";
import { useEffect } from "react";

const Explore = () => {
  useEffect(() => {
    const doit = async () => {
      const stuff = await axios.post("/api/verify");
      console.log(stuff);
    };
    doit();
  }, []);
  return (
    <div>
      <h2>Explore</h2>
    </div>
  );
};

export default Explore;
