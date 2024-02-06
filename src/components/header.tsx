import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  background-color: #15803d;
`;

const Header = ({children}) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default Header;
