//this is the page basically - when you navigate to a different page it is displayed here.
import Navbar from "./Navbar";

const PageContainer = (props) => {
  return (
    <>
      <Navbar />
      <div className="content">{props.children}</div>
    </>
  );
};

export default PageContainer;
