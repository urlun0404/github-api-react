const Header = ({ userName }) => {
  return (
    <header>
      <h1>
        <span className="variable" style={{ fontSize: "1.5rem" }}>
          username:
        </span>
        {userName}
      </h1>
    </header>
  );
};

export default Header;
