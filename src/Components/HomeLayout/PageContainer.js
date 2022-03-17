//this is the page basically - when you navigate to a different page it is displayed here.
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const PageContainer = (props) => {
  return (
    <div className="container">
      <Sidebar />
      <Navbar />
      <div className="content">{props.children}</div>
    </div>
  );
};

export default PageContainer;
