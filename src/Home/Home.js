//this is the page basically - when you navigate to a different page it is displayed here.
import Feed from "../Home/Feed/Feed";
import SideRight from "../Home/SideRight/SideRight";

const Home = () => {
  return (
    <div>
      <Feed />
      <SideRight />
    </div>
  );
};

export default Home;
