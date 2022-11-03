import styled, { css } from "styled-components";

function isCurrent(to) {
  return window.location.pathname.startsWith(to);
}

const Link = styled.a`
  display: block;
  margin: 0 calc(20px * -1);
  padding: 8px 30px;
  border-radius: 4px;
  color: #fffffe;
  font-size: 20px;
  text-decoration: none;

  ${(p) =>
    p.active &&
    css`
      color: #504197;
      font-weight: bold;
    `}

  &:hover {
    background: #504197;
    color: #fffffe;
    transform: translateY(-2px);
    transition: 1s;
  }

  &:not([href]) {
    color: #a7a9be;
    background: revert;
    transform: none;
  }
`;

function NavLink({ children, to, active = false }) {
  return (
    <Link
      href={to}
      active={active}
      aria-current={isCurrent(to) ? "page" : null}
    >
      {children}
    </Link>
  );
}

export default NavLink;