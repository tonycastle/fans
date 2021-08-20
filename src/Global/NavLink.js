const NavLink = ({ Icon, page, onClick, active }) => {
  return (
    <div
      className={`navLink ${active && "navLink--active"}`}
      onclick={() => {
        onClick();
      }}
    >
      <Icon className="mdIcon" />
      <span>{page}</span>
    </div>
  );
};

export default NavLink;
