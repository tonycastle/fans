const NavLink = ({ Icon, page, onClick, active }) => {
  return (
    <div
      className={`navLink ${active && "navLink--active"}`}
      onclick={() => {
        onClick();
      }}
    >
      <Icon />
      <h2>{page}</h2>
    </div>
  );
};

export default NavLink;
