const NavComponent = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/Mia.png`} alt="alt" />
      </a>
      <ul className="links">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      {/* <ul className="navbar-links">
        <li>
          <a href="/">IT</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavComponent;
