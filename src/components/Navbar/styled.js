import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 14px;
  color: var(--primary-main);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  padding: 30px 0;
  transition: all 0.2s ease;
  @media screen and (max-width: 800px) {
    padding: 10px 0;
  }
  &:hover {
    color: var(--secondary-light);
  }
  &:hover span {
    width: 100%;
  }
`;

export { Link };
