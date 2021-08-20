import { Link } from "react-router-dom";

const NavLink = ({ Icon, page, target, active }) => {
  return (
    <div className={`navLink ${active && "navLink--active"}`}>
      <Icon />
      <Link to={target}>{page}</Link>
    </div>
  );
};

export default NavLink;
