//this is the page basically - when you navigate to a different page it is displayed here.
import Navbar from "../HomeLayout/Navbar";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <div className="content">{props.children}</div>
    </>
  );
};

export default Home;
