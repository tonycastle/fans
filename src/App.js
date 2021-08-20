import Feed from "./Feed/Feed";
import Navbar from "./Global/Navbar";
import SideRight from "./SideRight/SideRight";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Feed />
      <SideRight />
    </div>
  );
};

export default App;
