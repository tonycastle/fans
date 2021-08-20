import { Link } from "react-router-dom";

const NavLink = ({ Icon, page, target, active }) => {
  return (
    // <div className={`navLink ${active && "navLink--active"}`}>
    <Link to={target} activeClassName="navLink--active">
      <div className="navLink">
        <Icon />
        <span>{page}</span>
      </div>
    </Link>
  );
};

export default NavLink;
