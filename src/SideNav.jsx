import Nav from "./Nav";
import { Link } from "react-router-dom";

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

function SideNav() {
  return (
    <Nav>
      <Nav.List>
        <Nav.Item>
          <Link to='/profile'>
          TEST
          </Link>
          <Nav.Link to="/main" active={isActive("/main")}>
            HOME
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/search" active={isActive("/search")}>
            SEARCH
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/keyword" active={isActive("/keyword")}>
            KEYWORD
          </Nav.Link>
        </Nav.Item><Nav.Item>
          <Nav.Link to="/profile/_profile" active={isActive("/profile")}>
            PROFILE
          </Nav.Link>
        </Nav.Item>
        <Nav.Link/><Nav.Link/><Nav.Link/><Nav.Link/><Nav.Link/><Nav.Link/><Nav.Link/><Nav.Link/><Nav.Link/><Nav.Link/>
        <Nav.Item>
          <Nav.Link2 to="/logout" active={isActive("/logout")}>
            LOGOUT
          </Nav.Link2>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}

export default SideNav;