import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 32px;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;

export { Link };
