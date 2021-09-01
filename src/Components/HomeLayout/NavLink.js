import { Link, useRouteMatch } from "react-router-dom";

const NavLink = ({ Icon, page, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({ path: to, exact: activeOnlyWhenExact });
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div className={`navLink ${match && "navLink--active"}`}>
        <Icon />
        <h3>{page}</h3>
      </div>
    </Link>
  );
};

export default NavLink;
