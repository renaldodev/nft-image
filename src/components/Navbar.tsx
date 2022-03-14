import styled from "styled-components";
import { BsSearch, BsWallet } from "react-icons/bs";
const WapperContainer = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.black};
  z-index: 999;
`;
const RigthContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Logo = styled.h1`
  font-size: 1.5rem;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 20rem;
  height: 2rem;
  gap: 1rem;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.white};
`;
const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;
const NavItem = styled.p`
  font-size: 1rem;
  cursor: pointer;
`;
const ButtonWalletContainer = styled.button`
  display: flex;
  background-color: ${(props) => props.theme.colors.pink};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 0;
  padding: 0.5rem;
  gap: 0.5rem;
  color: white;
`;
const ButtonWalletText = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export default function Navbar() {
  return (
    <WapperContainer>
      <LeftContainer>
        <Logo>NFT</Logo>
        <SearchContainer>
          <BsSearch />
          <Input type="text" placeholder="Search" />
        </SearchContainer>
        <Nav>
          <NavItem>Artworks</NavItem>
          <NavItem>Artists</NavItem>
        </Nav>
      </LeftContainer>
      <RigthContainer>
        <ButtonWalletContainer>
          <BsWallet />
          <ButtonWalletText>Adc Wallet</ButtonWalletText>
        </ButtonWalletContainer>
      </RigthContainer>
    </WapperContainer>
  );
}
